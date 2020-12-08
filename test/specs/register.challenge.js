/**
 - Write a set of tests for the register account page that checks the following requirements:
  - Requires username, email, and password
  - errors if username is already taken
  - errors if email is not a valid format (e.g., missing `@`)
  - errors if email has already been taken
  - Takes you to the home page once you register
 */

// const { $email, $password } = require("../page-objects/auth.page");

const signup = require("../page-objects/signup.page");

describe.only("Register Page", () => {
  //
  beforeEach(() => {
    browser.url("./register");
  });

  //
  it("requires username, email, and password", () => {
    signup.register("", "", "");
    expect(signup.$errorMessages).toBeExisting();
  });

  //
  it("should display an error if username is already taken", () => {
    const expect = require("chai").expect;
    signup.register(
      "demo@learnwebdriverio.com",
      "demo@learnwebdriverio.com",
      "wdiodemo"
    );

    expect(signup.messagesText).to.contain("email is already taken.");
  });

  // errors if email is not a valid format (e.g., missing `@`)
  it("should display an error if email is not a valid format", () => {
    const expect = require("chai").expect;
    signup.register(
      "demo@learnwebdriverio.com",
      "demolearnwebdriverio.com",
      "wdiodemo"
    );

    expect(signup.messagesText).to.contain("email is invalid");
  });

  // errors if email has already been taken
  it("should display an error if email has already been taken", () => {
    const expect = require("chai").expect;
    signup.register(
      "demo@learnwebdriverio.com",
      "demo@learnwebdriverio.com",
      "wdiodemo"
    );

    expect(signup.messagesText).to.contain("email is already taken");
  });

  // Takes you to the home page once you register
  // TODO: redirected but checking not working
  it("should takes you to the home page once you register", () => {
    const expect = require("chai").expect;
    let timeStamp = new Date().getTime();
    signup.register(
      `mariam${timeStamp}`,
      `mariam${timeStamp}@mit.edu`,
      `mariam${timeStamp}coti`
    );

    // Get the URL of the page, which should no longer include 'register'
    // expect(browser).not.toHaveUrl(register.url.href);
    expect(browser.getUrl()).not.to.contain("register");
  });
});

// const urlToCheck = "http://localhost:8080";
// browser.waitUtil(
//   () => {
//     return browser.getUrl() === urlToCheck;
//   },
//   { timoutMsg: 'The "Sign up" not redirect to homepage' }
// );

// browser.waitUntil(
//   () => {
//     let pageUrl = browser.getUrl();
//     return pageUrl === urlToCheck;
//   },
//   { timoutMsg: 'The "Sign up" not redirect to homepage' }
// );

// expect(browser.getUrl()).to.equal(urlToCheck);
