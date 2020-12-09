const PageBase = require("./base.page");

class Editor extends PageBase {
  constructor() {
    super("./editor");
  }
  get $title() {
    return $('[data-qa-id="editor-title"]');
  }
  get $description() {
    return $('[data-qa-id="editor-description"]');
  }
  get $body() {
    return $(
      "[data-qa-id='editor-body'] [class='auto-textarea-input no-border no-resize']"
    ); //$('[data-qa-id="editor-body"]');
  }
  get $tags() {
    return $('[data-qa-id="editor-tags"]');
  }
  get $publish() {
    return $('[data-qa-id="editor-publish"]');
  }

  submitArticle({ title, description, body, tags }) {
    this.$title.setValue(title);
    this.$description.setValue(description);
    this.$body.setValue(body);
    tags.forEach((tag) => {
      this.$tags.setValue(tag);
      this.$tags.keys("Enter");
    });
    this.$publish.click();
  }
}

module.exports = new Editor();
