const page = require("../page-objects/editor.page");
const PageBase = require("./base.page");
const Api = require("../utils/api");

const api = new Api("http://localhost:3000/api/");

class Auth extends PageBase {
  constructor() {
    super("./login");
  }
  get $email() {
    return $('input[type="email"]');
  }
  get $password() {
    return $('input[type="password"]');
  }
  get $signIn() {
    return $("button*=Sign in");
  }
  get $errorMessages() {
    return $(".error-messages li");
  }

  login(user) {
    // super.load();
    const { email, password } = user;
    this.$email.setValue(email);
    this.$password.setValue(password);
    this.$signIn.click();

    // wait until either the sign in button is gone or an error appears
    browser.waitUntil(
      () => {
        const signInExist = this.$signIn.isExisting();
        const errorMessagesExist = this.$errorMessages.isExisting();
        return !signInExist || errorMessagesExist;
      },
      {
        timoutMsg:
          'The "Sign in" button still exists and an error never appeared',
      }
    );
  }

  clearSession() {
    browser.execute(() => window.localStorage.clear());
  }

  loginViaApi(user) {
    const token = browser.call(() => {
      return api.getAuthToken(user);
    });

    // load the base page so we can set the token
    browser.url("./");

    // inject the auth token
    browser.execute((browserToken) => {
      window.localStorage.setItem("id_token", browserToken);
    }, token);
  }
}

module.exports = new Auth();
