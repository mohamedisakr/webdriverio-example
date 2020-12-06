//
describe("first challenge", () => {
  before(() => {
    browser.url("./");
  });

  // For your first challenge, in your existing test, add a check that validates
  // that when you click on the "Conduit" logo in the top left of the site,
  // it returns you to the homepage.
  it("validate when click on logo redirect to the homepage", () => {
    // get conduit selector
    const conduit = $(
      "a[class='navbar-brand router-link-exact-active router-link-active']"
    );

    // and click it
    conduit.click();

    // check if browser contanin
    expect(browser).toHaveUrl("http://localhost:8080", { containing: true });
  });
});
