const Component = require("./component");
const ArticlePreview = require("./article-preview");

class Feed extends Component {
  get $$articles() {
    return this.$origin.$$('[data-qa-type="article-preview"]');
  }

  get articles() {
    this.$$articles.map(($article) => new ArticlePreview($article));
  }

  get $articleLoadingIndicator() {
    return this.$origin.$('[data-qa-id="article-loading-indicator"]');
  }

  waitForLoad() {
    this.$articleLoadingIndicator.waitForExist({ reverse: true });
  }
}

module.exports = Feed;
