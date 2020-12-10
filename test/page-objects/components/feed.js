const Component = require("./component");

class Feed extends Component {
  get $$articles() {
    return this.$origin.$$('[data-qa-type="article-preview"]');
  }
  get $articleLoadingIndicator() {
    return this.$origin.$('[data-qa-id="article-loading-indicator"]');
  }
  waitForLoad() {
    this.$articleLoadingIndicator.waitForExist({ reverse: true });
  }
}

module.exports = Feed;
