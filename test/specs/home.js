const home = require("../page-objects/home.page");

describe("Homepage", () => {
  before(() => {
    home.load();
  });

  it("should load properly", () => {
    // check that top nav/footer exist
    expect(home.$siteHeader).toBeExisting();
    expect(home.$siteFooter).toBeExisting();
    expect(home.$siteNav).toBeExisting();
  });

  it("should only show the global feed tab", function () {
    expect(home.feedTabsText).toEqual(["Global Feed"]);
  });
});
