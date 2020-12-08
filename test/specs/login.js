const auth = require("../page-objects/auth.page");
const { user1 } = require("../fixtures/users");
// /*
describe("Login Page", () => {
  beforeEach(() => {
    auth.load(); // browser.url("./login");
  });

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

/*
//
class Auth {
  get $email() {
    return $('input[type="email"]');
  }
  get $password() {
    return $('input[type="password"]');
  }
  get $signIn() {
    return $("[class='btn btn-lg btn-primary pull-xs-right']"); //button*=Sign in
  }
  get $errorMessages() {
    return $(".error-messages li");
  }
}

const auth = new Auth();

function login(email, password) {
  auth.$email.setValue(email);
  auth.$password.setValue(password);
  auth.$signIn.click();
}

///*
//
describe("Login Page", () => {
  //
  beforeEach(() => {
    // go to the login page
    browser.url("./login");
  });

  //
  it("should let you log in", () => {
    login("demo@learnwebdriverio.com", "wdiodemo");
    auth.$signIn.waitForExist({ reverse: true });
    expect(auth.$errorMessage).not.toBeExisting();
  });

  //
  it("should error with a missing username", () => {
    login("", "wdiodemo");
    // expect(auth.$errorMessages).toHaveText(`email can't be blank`);
    expect(auth.$errorMessage).toHaveTextContaining("email can't be blank");
  });

  //
  it("should error with a missing password", () => {
    login("demo@learnwebdriverio.com", "");
    // expect(auth.$errorMessage).toHaveText("password can't be blank");
    expect(auth.$errorMessage).toHaveTextContaining("password can't be blank");
  });
});
//
// */
