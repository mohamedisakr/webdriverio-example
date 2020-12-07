// 2.3.6 Chapter Challenge

describe("third challenge", () => {
  //
  it("Update the 'waitFor' code to instead use `waitForDisplayed`", () => {
    // go to the login page
    browser.url("./login");

    // enter a valid username in the "email" input
    const email = $('input[type="email"]');
    email.setValue("demo@learnwebdriverio.com");

    // enter a valid password in the "password" input
    const password = $('input[type="password"]');
    password.setValue("wdiodemo");

    // click the 'Sign In' button
    const signinButton = $("form .btn.btn-lg.btn-primary.pull-xs-right");
    signinButton.click();

    // assert that we're logged in using settings
    const settings = $("[data-qa-id='site-nav'] a[href*='settings']"); //a[href*='settings']
    settings.waitForDisplayed();
    // console.log("Settings isDisplayed ", settings.isDisplayed());

    // Get the URL of the page, which should no longer include 'login'
    expect(browser.getUrl).not.toContain("/login");
  });

  //   /*
  // Instead of waiting for the "Sign in" button to stop existing, try waiting for
  // the "Your Feed" tab to appear.
  it("Instead of waiting for the 'Sign in' button to stop existing waiting for the 'Your Feed'", () => {
    // go to the login page
    browser.url("./login");

    // enter a valid username in the "email" input
    const email = $('input[type="email"]');
    email.setValue("demo@learnwebdriverio.com");

    // enter a valid password in the "password" input
    const password = $('input[type="password"]');
    password.setValue("wdiodemo");

    // click the 'Sign In' button
    const signinButton = $("form .btn.btn-lg.btn-primary.pull-xs-right");
    signinButton.click();

    // assert that we're logged in using "Your Feed" tab
    const feed = $(
      "[data-qa-type='feed-tab'] a[class='nav-link router-link-exact-active active']"
    );
    feed.waitForDisplayed();

    // Get the URL of the page, which should no longer include 'login'
    expect(browser.getUrl).not.toContain("/login");
  });

  //   */
});
