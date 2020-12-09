const home = require("../page-objects/home.page");
const auth = require("../page-objects/auth.page");
const { user1 } = require("../fixtures/users");
const Api = require("../utils/api");

const api = new Api("http://localhost:3000/api/tags");

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

  describe.only("Logged In", () => {
    before(() => {
      // browser.loginViaApi(user1);
      // 2.7.7 Chapter Challenge
      // - Rather than use the `addCommand` command, update the `Auth` page object to
      //    have the `loginViaApi` functionality
      auth.loginViaApi(user1);
      home.load();
    });

    // after(() => {
    //   auth.clearSession();
    // });

    it("should show both the global feed tab", () => {
      expect(home.feedTabsText).toEqual(["Your Feed", "Global Feed"]);
    });

    it("should default to showing the global feed", () => {
      // get all tabs with an 'active' class, check only one returns with correct text
      expect(home.activeFeedTabText).toEqual(["Global Feed"]);
    });

    // // TODO: postponse this test
    // it("should show all tags", () => {
    //   const tags = api.getAllTags();
    //   expect(tags).toEqual(["ceroija", "liv"]);
    // });
  });
});
