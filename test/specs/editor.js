const auth = require("../page-objects/auth.page");
const editor = require("../page-objects/editor.page");
const article = require("../page-objects/article.page");
const { user1 } = require("../fixtures/users");
/*
//
describe("Post Editor", () => {
  //
  before(() => {
    // no need to call load function as we call it from login function in auth page object
    auth.load();
    // const { email, password } = user1;
    // auth.login(user1); //("demo@learnwebdriverio.com", "wdiodemo");

    // 2.7.7 Chapter Challenge
    // - Update the `editor.js` test to use this new function
    // (but not the `login.js` file, since we actually want to test the login page)
    auth.loginViaApi(user1);
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
    const articleDetails = {
      title: global.chance.sentence({ words: 3 }),
      description: global.chance.sentence({ words: 7 }),
      body: global.chance.paragraph({ sentences: 4 }),
      tags: [global.chance.word(), global.chance.word()],
    };

    editor.submitArticle(articleDetails);

    expect(article.$title).toHaveTextContaining(articleDetails.title);
    expect(article.$body).toHaveTextContaining(articleDetails.body);
    expect(article.tags).toEqual(articleDetails.tags);

    // to avoid making a lot of articles, let's just click the delete button to
    // clean it up. We'll talk about a better way to clean it later on.
    article.$delete.click();
  });

  //
  describe('Alert "Unsaved Changes" alerts', () => {
    beforeEach(() => {
      editor.$title.setValue("Unsaved Change");
    });

    it("should alert you when using browser navigation", () => {
      // try refreshing the page
      browser.refresh();

      // validate alert is showing
      expect(() => browser.acceptAlert()).not.toThrow();
    });

    it("should warn you when trying to change URL", () => {
      // try going to the homepage
      $("=Home").click();

      const alertText = browser.getAlertText();

      expect(alertText).toEqual(
        "Do you really want to leave? You have unsaved changes!"
      );

      // accept the alert to avoid it from preventing further tests from executing
      browser.acceptAlert();
    });
  });
});
// */
