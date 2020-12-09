const PageBase = require("./base.page");

class Article extends PageBase {
  get $container() {
    return $('[data-qa-id="article-page"]');
  }
  get $title() {
    return $('[data-qa-id="article-title"]');
  }
  get $body() {
    return $('[data-qa-id="article-body"]');
  }
  get $tags() {
    return $('[data-qa-id="article-tags"]');
  }
  get $edit() {
    return $('[data-qa-id="article-edit"]');
  }
  get $delete() {
    return $('[data-qa-id="article-delete"]');
  }

  get $tags() {
    return $('[data-qa-id="article-tags"]');
  }

  get $$tags() {
    return $$('[data-qa-id="article-tags"] [data-qa-type="article-tag"]');
  }

  get tags() {
    return this.$$tags.map(($tag) => $tag.getText());
  }
}

module.exports = new Article();
