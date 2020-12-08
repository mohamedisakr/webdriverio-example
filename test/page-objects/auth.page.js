const page = require("../page-objects/editor.page");
const PageBase = require("./base.page");
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

  // load() {
  //   browser.url("./login");
  // }

  login(user) {
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
}

module.exports = new Auth();
