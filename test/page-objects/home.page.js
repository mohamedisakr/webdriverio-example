const PageBase = require("./base.page");

class Home extends PageBase {
  constructor() {
    super.load("./");
  }
}

module.exports = new PageBase();
