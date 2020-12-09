/*
## 2.6.11 Chapter Challenge

We have a test for how to create an article, but what about editing one? Write a new 
set of tests to validate you can edit an article. Ensure that:

- The fields populate with the existing article contents
- The article page shows the updated contents after saving the edits

Hint: You can use the same `Editor.page.js` file as it's actually the exact same page 
as the "New Article" one (just prefilled with the contents of the article to edit). 

%% (TODO Vue version of the Conduit app doesn't do any form validation :o so we'll need 
to add that in or switch to React version which does)
%% - Our tests don't cover validating that the error messages show on the Editor page if 
we fail to enter information. Write a set of tests that cover this user flow. 
(Hint: use `$$('.errorMessages li')` and mapping `getText` to get all error text and 
assert against it.
*/

const auth = require("../page-objects/auth.page");
const editor = require("../page-objects/editor.page");
const article = require("../page-objects/article.page");
const { user1 } = require("../fixtures/users");

//
describe("Post Editor", () => {
  //
  before(() => {
    // no need to call load function as we call it from login function in auth page object
    auth.load();
    // const { email, password } = user1;
    auth.login(user1); //("demo@learnwebdriverio.com", "wdiodemo");
  });

  //
  beforeEach(() => {
    editor.load(); // browser.url("./editor");
  });
});
