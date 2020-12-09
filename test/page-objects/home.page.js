const PageBase = require("./base.page");
const { getTrimmedText } = require("../utils/functions");

class Home extends PageBase {
  constructor() {
    super("./");
  }

  get $$feedTabs() {
    return $$('[data-qa-id="feed-tabs"] [data-qa-type="feed-tab"]');
  }

  get feedTabsText() {
    return this.$$feedTabs.map(getTrimmedText);
  }

  get activeFeedTabText() {
    return this.$$feedTabs.$$(".active").map(getTrimmedText);
  }
}

module.exports = new Home();
