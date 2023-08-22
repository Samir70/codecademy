const {assert} = require('chai');

describe("User visits root", () => {
  describe('User can enter quote data', () => {
    it('User can supply quote with author', () => {
      let quote = "Hello world";
      let attributed = "Anon coder";
      let source = "every beginner's first script";
      browser.url("/");
      browser.setValue("textarea[id=quote]", quote);
      browser.setValue("input[id=attributed]", attributed);
      browser.setValue("input[id=source]", source);
      browser.click("input[type=submit]");
      assert.include(browser.getText("#quotes"), quote);
      assert.include(browser.getText("#quotes"), attributed);
      assert.include(browser.getText("#quotes"), source);
    })
  })
})