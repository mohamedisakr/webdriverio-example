const home = require("../page-objects/home.page");

describe("Homepage", () => {
  before(() => {
    // load the page
    home.load();
  });

  it("should load properly", () => {
    // check that top nav/footer exist
    expect(home.$siteHeader).toBeExisting();
    expect(home.$siteFooter).toBeExisting();
    expect(home.$siteNav).toBeExisting();
  });
});
