class Org {
  constructor(orgName) {
    this.orgName = orgName;
    this.size = 0;
    this.assigned = false;
    this.numSiteLeaders = 0;
    this.members = [];
  }

  addMember(row) {
    this.size += 1;
    this.members.push(row);
  }

  assign() {
    this.assigned = true;
  }

  deassign() {
    this.assigned = false;
  }

  addSiteLeader(row) {
    this.addMember(row);
    this.numSiteLeaders += 1;
  }
}

module.exports = Org;
