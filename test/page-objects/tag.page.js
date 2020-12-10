const Home = require("./home.page");

class Tag extends Home {
  constructor(tagName) {
    super("./tag/" + tagName);
  }
}
module.exports = Tag;
