const express = require("express");
const { GoogleSpreadsheet: GSheet } = require("google-spreadsheet");
/* eslint-disable no-inner-declarations */
const Site = require("./classes/Site");
const Org = require("./classes/Org");
const Sorter = require("./classes/Sorter");

const creds = require("./bp-creds.json");
const sheetIds = require("./sheet-ids.json");

const router = express.Router();
const rawFormData = new GSheet(sheetIds.rawFormData);
const sortedBySites = new GSheet(sheetIds.sortedBySites);
const sortedByVolunteerStatus = new GSheet(sheetIds.sortedByVolunteerStatus);
const admin = new GSheet(sheetIds.admin);
const sheets = [rawFormData, sortedByVolunteerStatus, sortedBySites, admin];

let bpday = false;

sheets.forEach((sheet) => {
  sheet.useServiceAccountAuth(creds).then(async () => {
    await sheet.loadInfo();
    if (sheet === admin) {
      const adminSheet = admin.sheetsByIndex[0];
      await adminSheet.loadCells();
      const bpdayCell = await adminSheet.getCellByA1("B2");
      bpday = bpdayCell.value;
    }
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.get("/admins", async (_, res) => {
  try {
    const adminSheet = admin.sheetsByIndex[0];
    const adminRows = await adminSheet.getRows();
    const result = [];
    adminRows.forEach((row) => {
      result.push(row["Admin Accounts"]);
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.get("/bpday", async (_, res) => {
  try {
    res.send(bpday);
  } catch (error) {
    console.log(error);
  }
});

router.post("/bpday", async (_, res) => {
  try {
    bpday = !bpday;
    const adminSheet = admin.sheetsByIndex[0];
    await adminSheet.loadCells();
    const bpdayCell = await adminSheet.getCellByA1("B2");
    bpdayCell.value = bpday;
    await bpdayCell.save();
    res.send();
  } catch (error) {
    console.log(error);
  }
});

const GROUP_AFFILIATION_KEY = "Group Affiliation?";
const AFFILIATED = "Affiliated";
const UNAFFILIATED = "Unaffiliated";
const SITE_LEADERS = "Site Leaders";
const SITES = "Sites";
const PHONE_NUMBER_KEY = "Phone Number";
const NAME_KEY = "Full Name";
const EMAIL_KEY = "Email Address";

router.post("/sort-form-data", async (_, res) => {
  try {
    const unsortedSheet = rawFormData.sheetsByIndex[0];
    const rows = await unsortedSheet.getRows();
    const titleRows = unsortedSheet.headerValues;

    const affiliatedSheet = await sortedByVolunteerStatus.addSheet({
      headerValues: titleRows,
      title: AFFILIATED,
    });
    const unaffiliatedSheet = await sortedByVolunteerStatus.addSheet({
      headerValues: titleRows,
      title: UNAFFILIATED,
    });
    const siteLeadersSheet = await sortedByVolunteerStatus.addSheet({
      headerValues: titleRows,
      title: SITE_LEADERS,
    });

    // slice 1 to not include header rows. This line sorts the form entries by group affiliation.
    const sortedRows = rows.slice(1).sort((a, b) => {
      // fill in a function that compares 2 rows' group affiliation with each other.
      let str1 = a[GROUP_AFFILIATION_KEY];
      let str2 = b[GROUP_AFFILIATION_KEY];
      if (!str1) {
        str1 = "";
      }
      if (!str2) {
        str2 = "";
      }
      return str1.localeCompare(str2);
    });

    const siteLeadersRows = [];
    const unaffiliatedRows = [];
    const affiliatedRows = [];

    sortedRows.forEach((r) => {
      if (r["Are you interested in becoming a Site Leader?"] === "Yes") {
        siteLeadersRows.push([...r._rawData]);
      } else if (!r[GROUP_AFFILIATION_KEY]) {
        unaffiliatedRows.push([...r._rawData]);
      } else {
        affiliatedRows.push([...r._rawData]);
      }
    });

    const addRowsConfig = { raw: true };
    await Promise.all([
      affiliatedSheet.addRows(affiliatedRows, addRowsConfig),
      unaffiliatedSheet.addRows(unaffiliatedRows, addRowsConfig),
      siteLeadersSheet.addRows(siteLeadersRows, addRowsConfig),
    ]);
    await res.send();
  } catch (error) {
    console.log(error.stack);
  }
});

router.get("/match-volunteers-to-sites", async (_, res) => {
  try {
    const affiliated = sortedByVolunteerStatus.sheetsByTitle[AFFILIATED];
    const affiliatedRows = await affiliated.getRows();
    const unaffiliated = sortedByVolunteerStatus.sheetsByTitle[UNAFFILIATED];
    const unaffiliatedRows = await unaffiliated.getRows();
    const siteLeaders = sortedByVolunteerStatus.sheetsByTitle[SITE_LEADERS];
    const siteLeaderRows = await siteLeaders.getRows();
    const sites = sortedByVolunteerStatus.sheetsByTitle[SITES];
    const sitesRows = await sites.getRows();

    const countGroups = {};

    affiliatedRows.forEach((row) => {
      const groupAffiliation = row[GROUP_AFFILIATION_KEY].toLowerCase().trim();
      if (!(groupAffiliation in countGroups)) {
        countGroups[groupAffiliation] = new Org(groupAffiliation);
      }
      countGroups[groupAffiliation].addMember(row);
    });

    siteLeaderRows.forEach((row) => {
      if (row[GROUP_AFFILIATION_KEY]) {
        const groupAffiliation =
          row[GROUP_AFFILIATION_KEY].toLowerCase().trim();
        if (!(groupAffiliation in countGroups)) {
          countGroups[groupAffiliation] = new Org(groupAffiliation);
        }
        countGroups[groupAffiliation].addSiteLeader(row);
      }
    });

    const OrgList = [...Object.values(countGroups)];

    unaffiliatedRows.forEach((row) => {
      const singleOrg = new Org(row[NAME_KEY]);
      singleOrg.addMember(row);
      OrgList.push(singleOrg);
    });

    siteLeaderRows.forEach((row) => {
      if (!row[GROUP_AFFILIATION_KEY]) {
        const singleOrg = new Org(row[NAME_KEY]);
        singleOrg.addSiteLeader(row);
        OrgList.push(singleOrg);
      }
    });

    const SiteList = [];
    sitesRows.forEach((row) => {
      const minVol = Number(row.min);
      const maxVol = minVol + Number(row.extra);
      SiteList.push(new Site(row["Site Name"], minVol, maxVol));
    });

    const sortedSites = Sorter.sortSites(OrgList, SiteList);
    for (const site of sortedSites) {
      const newSheet = await sortedBySites.addSheet({
        headerValues: [
          NAME_KEY,
          EMAIL_KEY,
          PHONE_NUMBER_KEY,
          GROUP_AFFILIATION_KEY,
        ],
        title: site.siteName,
      });
      const newRows = [];
      site.assignedOrgs.forEach((org) => {
        org.members.forEach((row) => {
          newRows.push({
            [NAME_KEY]: row[NAME_KEY],
            [EMAIL_KEY]: row[EMAIL_KEY],
            [PHONE_NUMBER_KEY]: row[PHONE_NUMBER_KEY],
            [GROUP_AFFILIATION_KEY]: row[GROUP_AFFILIATION_KEY],
          });
        });
      });
      await newSheet.addRows(newRows, { raw: true });
      // Introduces an artifical delay as not to exceed API Quotas
      await sleep(2000);
    }
    await res.send();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
