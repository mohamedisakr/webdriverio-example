const { use } = require("chai");
const { user1 } = require("../fixtures/users");
const Tag = require("../page-objects/tag.page");

describe("Tag Feed", () => {
  let articleDetails, tagName, tagPage, articleResponse;

  before(() => {
    articleDetails = {
      title: chance.sentence({ words: 3 }),
      description: chance.sentence({ words: 7 }),
      body: chance.paragraph({ sentences: 2 }),
      tagList: [chance.word({ length: 30 })],
    };

    tagName = articleDetails.tagList[0];

    // create the article we need to get the specific tag
    articleResponse = browser.call(() => {
      return global.api.createArticle(user1, articleDetails);
    });

    tagPage = new Tag(tagName);

    // load the page
    tagPage.load();
  });

  after(function () {
    browser.call(() => {
      return global.api.deleteArticle(user1, articleResponse.slug);
    });
  });

  it("should have tag tab", () => {
    // check that we're on the tag tab
    expect(tagPage.feeds.$$activeFeedTabs[0]).toHaveText(tagName, {
      trim: true,
    });
  });

  it("should load only articles for that tag", () => {
    expect(tagPage.currentFeed.$$articles).toHaveChildren(1);
  });

  it("should load correct article preview details", () => {
    const firstArticleDetails = tagPage.currentFeed.articles[0].getDetails();

    expect(firstArticleDetails).toMatchObject({
      title: articleDetails.title,
      description: articleDetails.description,
    });
  });
});
