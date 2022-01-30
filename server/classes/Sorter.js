const Site = require("./Site");

class Sorter {
  static compareSites(siteOne, siteTwo) {
    if (siteOne.maxVol < siteTwo.maxVol) return -1;
    if (siteOne.maxVol > siteTwo.maxVol) return 1;
    if (siteOne.minVol <= siteTwo.minVol) return -1;
    if (siteOne.minVol > siteTwo.minVol) return 1;

    return 0;
  }

  static compareOrgs(org1, org2) {
    return org2.size - org1.size;
  }

  static sortSites(orgList, siteList) {
    // Sorts sites by volume. Smallest first, biggest last.
    siteList.sort(this.compareSites);
    // Sorts org by size. Biggest first, smallest last.
    orgList.sort(this.compareOrgs);
    // Fill up sites from smallest to largest. When a site is filled,
    // add site leaders too it if necessary.

    const res = [];

    for (const site of siteList) {
      for (const org of orgList) {
        if (!org.assigned && org.size <= site.maxVol) {
          site.addOrg(org);
          org.assign();
          if (site.currentCapacity >= site.minVol) {
            const desiredSLNum = Math.max(
              Math.round(site.currentCapacity / 15),
              1
            ); // At least 1 SL
            let i = 0;
            while (
              site.assignedSiteLeaders < desiredSLNum &&
              site.currentCapacity < site.maxVol
            ) {
              if (i === orgList.length) {
                break;
              }
              const org = orgList[i];
              const capacityUnderMax =
                org.size + site.currentCapacity <= site.maxVol;
              const SLsWithinBound =
                org.numSiteLeaders + site.assignedSiteLeaders <= desiredSLNum;
              if (!org.assigned && capacityUnderMax && SLsWithinBound) {
                site.addOrg(org);
                org.assign();
              }
              i += 1;
            }
            res.push(site);
            break;
          }
        }
      }
    }

    for (const site of siteList) {
      for (const org of orgList) {
        if (!org.assigned && org.size + site.currentCapacity <= site.maxVol) {
          site.addOrg(org);
          org.assign();
        }
      }
    }

    const unassignedSite = new Site("UNASSIGNED", 100000, 100000);
    for (const org of orgList) {
      if (!org.assigned) {
        unassignedSite.addOrg(org);
        org.assign();
      }
    }

    res.push(unassignedSite);

    return res;
  }
}

module.exports = Sorter;
