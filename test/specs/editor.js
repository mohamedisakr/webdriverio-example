const auth = require("../page-objects/auth.page");
const editor = require("../page-objects/editor.page");
const { user1 } = require("../fixtures/users");
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

  it("should assert the page fields are correct", () => {
    // expect(browser).toHaveUrl("editor", { containing: true });
    expect(editor.$title).toBeExisting();
    expect(editor.$description).toBeExisting();
    expect(editor.$body).toBeExisting();
    expect(editor.$tags).toBeExisting();
    expect(editor.$publish).toBeExisting();
  });

  it("should show correct url", () => {
    // // Assert the URL is correct
    expect(browser).toHaveUrl(editor.url.href);
  });
});
