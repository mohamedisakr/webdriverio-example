const { path } = require("chromedriver");

class PageBase {
  constructor(path) {
    //
    this.path = path;
  }

  load() {
    browser.url(this.path);
  }
}

module.exports = PageBase;
