const assert = require("assert");
//
describe.skip("homepage", () => {
  before(() => {
    browser.url("./");
  });

  //
  it("author example", function () {
    // load the page
    // browser.url("./");

    // Get the title of the homepage, should be 'Conduit'
    expect(browser).toHaveTitle("Conduit");

    // Click the 'Sign in' navigation link
    $("=Sign in").click();

    // Get the URL of the sign in page. It should include 'login'
    expect(browser).toHaveUrl("/login", { containing: true });
  });

  //
  it("should load properly", () => {
    //
    // browser.url("./");
    console.log(browser.getTitle());
    // assert.strictEqual(browser.getTitle(), "Conduit");
    expect(browser).toHaveTitle("Conduit");
  });

  //
  it("should click Sign in button", () => {
    //
    // browser.url("./");
    $("=Sign in").click();
    // console.log(browser.getUrl());
    // Get the URL of the sign in page. It should include 'login'
    // assert.strictEqual(browser.getUrl(), "http://localhost:8080/login");
    expect(browser).toHaveUrl("http://localhost:8080/login");
  });

  //
  it("should show that url have /login", () => {
    //
    // browser.url("./");
    $("=Sign in").click();
    // console.log(browser.getUrl());
    // Get the URL of the sign in page. It should include 'login'
    // assert.strictEqual(browser.getUrl(), "http://localhost:8080/login");
    expect(browser).toHaveUrl("/login", { containing: true });
  });

  //
  it("should give # of links", () => {
    const links = $$("a");
    expect(links).not.toHaveLength(5);
  });
});
