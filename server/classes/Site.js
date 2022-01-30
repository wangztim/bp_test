class Site {
  constructor(siteName, minVol, maxVol) {
    this.siteName = siteName;
    this.minVol = minVol;
    this.maxVol = maxVol;
    this.assignedOrgs = [];
    this.currentCapacity = 0;
    this.assignedSiteLeaders = 0;
  }

  addOrg(org) {
    this.assignedOrgs.push(org);
    this.currentCapacity += org.size;
    this.assignedSiteLeaders += org.numSiteLeaders;
  }
}

module.exports = Site;
