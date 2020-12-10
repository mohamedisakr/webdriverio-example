const PageBase = require("./base.page");
const { getTrimmedText } = require("../utils/functions");

class Home extends PageBase {
  constructor() {
    super("./");
  }

  get $feedsContainer() {
    return $('[data-qa-id="feed-tabs"]');
  }

  get $$feedTabs() {
    return this.$feedsContainer.$$('[data-qa-type="feed-tab"]');
  }

  get feedTabsText() {
    return this.$$feedTabs.map(getTrimmedText);
  }

  get activeFeedTabText() {
    return this.$feedsContainer
      .$$('[data-qa-type="feed-tab"] .active')
      .map(getTrimmedText);
  }

  get $articleLoadingIndicator() {
    return $('[data-qa-id="article-loading-indicator"]');
  }

  clickTab(tabText) {
    const tabToClick = this.$$feedTabs.find(
      ($tab) => $tab.getText() === tabText
    );
    tabToClick.click();
    browser.waitUntil(
      () => {
        return this.activeFeedTabText[0] === tabText;
      },
      { timeoutMsg: "Active tab text never switched to desired text" }
    );
    this.$articleLoadingIndicator.waitForExist({ reverse: true });
  }
}

module.exports = new Home();
