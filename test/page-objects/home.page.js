const PageBase = require("./base.page");

class Home extends PageBase {
  constructor() {
    super("./");
  }

  get $$feedTabs() {
    return $$('[data-qa-id="feed-tabs"] [data-qa-type="feed-tab"]');
  }

  get feedTabsText() {
    return this.$$feedTabs.map(($tab) => $tab.getText().trim());
  }
}

module.exports = new Home();
