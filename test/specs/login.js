/*
describe.skip("Login Page", () => {
  //
  it("should let you log in", () => {
    // go to the login page
    browser.url("./login");

    // enter a valid username in the "email" input
    const email = $('input[type="email"]'); // $('form-control form-control-lg');
    email.setValue("demo@learnwebdriverio.com");

    // enter a valid password in the "password" input
    const password = $('input[type="password"]');
    password.setValue("wdiodemo");

    // click the 'Sign In' button
    const signinButton = $(
      "button[class='btn btn-lg btn-primary pull-xs-right']"
    );

    signinButton.click();
    signinButton.waitForExist({ reverse: true });

    // assert that we're logged in using error message
    const errorMessage = $(".error-messages li");
    expect(errorMessage).not.toBeExisting();

    // assert that we're logged in using settings
    // const settings = $("a[href*='settings']");
    // settings.waitForExist();

    // assert that we're logged in using sign in label not exist
    // const signinLabel = $("a[href='/login']");
    // signinLabel.waitForExist({ reverse: true });

    // Get the URL of the page, which should no longer include 'login'
    // expect(browser.getUrl).not.toContain("/login");
  });

  // should error with a missing username
  // should error with a missing password
});
*/
