const home = require("../page-objects/home.page");
const auth = require("../page-objects/auth.page");
const { user1 } = require("../fixtures/users");

describe("Homepage", () => {
  describe("Anonymous", () => {
    before(() => {
      home.load();
    });

    it("should load properly", () => {
      // check that top nav/footer exist
      expect(home.$siteHeader).toBeExisting();
      expect(home.$siteFooter).toBeExisting();
      expect(home.$siteNav).toBeExisting();
    });

    it("should only show the global feed tab", () => {
      expect(home.feedTabsText).toEqual(["Global Feed"]);
    });
  });

  describe("Logged In", () => {
    before(() => {
      auth.load();
      auth.login(user1);

      home.load();
    });

    after(() => {
      auth.clearSession();
    });
  });
});
