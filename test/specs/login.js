const auth = require("../page-objects/auth.page");
const { user1 } = require("../fixtures/users");
/*
describe.skip("Login Page", () => {
  // no need for beforeEach as we call load function from login function in auth page object
  // beforeEach(() => {
  //   auth.load(); // browser.url("./login");
  // });

  it("should let you log in", () => {
    auth.login(user1); // auth.login({email, password});
    expect(auth.$errorMessages).not.toBeExisting();
  });

  it("should error with a missing username", () => {
    auth.login({ email: "", password: "wdiodemo" });
    // assert that error message is showing
    expect(auth.$errorMessages).toHaveText(`email can't be blank`);
  });

  it("should error with a missing password", () => {
    auth.login({ email: "demo@learnwebdriverio.com", password: "" });
    // assert that error message is showing
    expect(auth.$errorMessages).toHaveText(`password can't be blank`);
  });
});
// */
