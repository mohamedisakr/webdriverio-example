const PageBase = require("./base.page");
const Feed = require("./components/feed");
const { getTrimmedText } = require("../utils/functions");

class Home extends PageBase {
  constructor(url = "./") {
    super(url);
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

  get currentFeed() {
    return new Feed('[data-qa-type="article-list"]');
  }

  load() {
    super.load();
    this.currentFeed.waitForLoad();
  }

  clickTab(tabText) {
    const tabToClick = this.$$feedTabs.find(
      ($tab) => $tab.getText() === tabText
    );
    tabToClick.click();
    browser.waitUntil(() => this.activeFeedTabText[0] === tabText, {
      timeoutMsg: "Active tab text never switched to desired text",
    });
    // this.$articleLoadingIndicator.waitForExist({ reverse: true });
    this.currentFeed.waitForLoad();
  }
}

module.exports = Home; //new
