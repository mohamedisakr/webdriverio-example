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
      // 1. Require our Api file
      const Api = require("../../utils/Api");

      // 2. Instantiate a new Api instance with the url of our Api
      const api = new Api("http://localhost:3000/api/");

      // 3. Call the `getAuthToken` function
      const token = browser.call(() => {
        return api.getAuthToken(user1);
      });

      // 4. Load the page in an unauthorized state
      home.load();

      // 5. Set the token
      browser.execute((browserToken) => {
        window.localStorage.setItem("id_token", browserToken);
      }, token);

      // 6. Reload the homepage
      home.load();
    });

    after(() => {
      auth.clearSession();
    });
  });
});
