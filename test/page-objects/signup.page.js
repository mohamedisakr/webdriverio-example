class Signup {
  get $username() {
    return $(
      "input[placeholder='Username'][class='form-control form-control-lg']"
    );
  }
  get $email() {
    return $(
      "input[placeholder='Email'][class='form-control form-control-lg']"
    );
  }
  get $password() {
    return $("input[type='password'][class='form-control form-control-lg']");
  }
  get $registerButton() {
    return $("[class='btn btn-lg btn-primary pull-xs-right']");
  }

  // .error-messages li
  get $errorMessages() {
    return $(".error-messages li");
  }

  get messagesText() {
    return $(".error-messages").getText();
  }

  register(username, email, password) {
    this.$username.setValue(username);
    this.$email.setValue(email);
    this.$password.setValue(password);
    this.$registerButton.click();

    // wait until either the sign in button is gone or an error appears
    browser.waitUntil(
      () => {
        const registerButtonExist = this.$registerButton.isExisting();
        const errorMessagesExist = this.$errorMessages.isExisting();
        return !registerButtonExist || errorMessagesExist;
      },
      {
        timoutMsg:
          'The "Sign up" button still exists and an error never appeared',
      }
    );
  }
}

module.exports = new Signup();
