const Chance = require("chance");
const auth = require("../page-objects/auth.page");
const editor = require("../page-objects/editor.page");
const { user1 } = require("../fixtures/users");

const chance = new Chance();
//
describe("Post Editor", () => {
  //
  before(() => {
    // no need to call load function as we call it from login function in auth page object
    // auth.load();
    const { email, password } = user1;
    auth.login(email, password); //("demo@learnwebdriverio.com", "wdiodemo");
  });

  //
  beforeEach(() => {
    editor.load(); // browser.url("./editor");
  });

  //
  it("should show correct url", () => {
    // // Assert the URL is correct
    expect(browser).toHaveUrl(editor.url.href);
  });

  //
  it("should assert the page fields are correct", () => {
    // expect(browser).toHaveUrl("editor", { containing: true });
    expect(editor.$title).toBeExisting();
    expect(editor.$description).toBeExisting();
    expect(editor.$body).toBeExisting();
    expect(editor.$tags).toBeExisting();
    expect(editor.$publish).toBeExisting();
  });

  //
  it("should let you publish a new post", () => {
    const article = {
      title: chance.sentence({ words: 3 }),
      description: chance.sentence({ words: 7 }),
      body: chance.paragraph({ sentences: 4 }),
      tags: [chance.word(), chance.word()],
    };
    editor.submitArticle(article);

    const slug = articleDetails.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    // expect to be on new article page
    expect(browser).toHaveUrl(`articles/${slug}`, { containing: true });

    // to avoid making a lot of articles, let's just click the delete button to
    // clean it up. We'll talk about a better way to clean it later on.
    $("button*=Delete Article").click();
    // $(".article-actions button").click();
  });
});
