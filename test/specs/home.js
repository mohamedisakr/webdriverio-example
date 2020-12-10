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

    describe("Personal Feed", () => {
      before(() => {
        // ensure we're on the personal feed tab
        if (home.activeFeedTabText !== "Your Feed") {
          home.clickTab("Your Feed");
        }
      });

      it("should show most recent articles from people you follow", () => {
        expect(home.currentFeed.$$articles).toHaveChildren(1);
      });
    });

    after(() => {
      auth.clearSession();
    });

    it("should show both the global feed tab", () => {
      expect(home.feedTabsText).toEqual(["Your Feed", "Global Feed"]);
    });

    it("should default to showing the global feed", () => {
      // get all tabs with an 'active' class, check only one returns with correct text
      expect(home.activeFeedTabText).toEqual(["Global Feed"]);
    });

    it("should let you switch between global and personal feeds", () => {
      // click on 'Your feed' tab
      home.clickTab("Your Feed");
      // // validate 'active' tabs are correct
      expect(home.activeFeedTabText).toEqual(["Your Feed"]);
      // click 'Global' tab
      home.clickTab("Global Feed");
      // validate again
      expect(home.activeFeedTabText).toEqual(["Global Feed"]);
    });

    // // TODO: postponse this test
    // it("should show all tags", () => {
    //   const tags = api.getAllTags();
    //   expect(tags).toEqual(["ceroija", "liv"]);
    // });
  });
});

// // the old way
// it("should let you switch between global and personal feeds", function () {
//   // get the tab that has `Your Feed` as text
//   const yourFeedTab = home.$$feedTabs.find(
//     ($tab) => $tab.getText() === "Your Feed"
//   );
//   // Click on that tab
//   yourFeedTab.click();
//   // Validate 'active' tab is now `Your Feed`
//   expect(home.activeFeedTabText).toEqual(["Your Feed"]);
//   // get the tab that has `Global` as text
//   const globalFeedTab = home.$$feedTabs.find(
//     ($tab) => $tab.getText() === "Global Feed"
//   );
//   // Click on that tab
//   globalFeedTab.click();
//   // validate again
//   expect(home.activeFeedTabText).toEqual(["Global Feed"]);
// });
