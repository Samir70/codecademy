const {assert} = require('chai');
// Feature level tests
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

// server level tests

// test/routes/index-test.js
// const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};

describe("/", () => {
  describe("POST new request", () => {
    it("creates a new quote", async () => {
      const quote = "hello world";
      const attributed = "almost everyone";
      const source = "everywhere";
      const response = await request(app).post('/').type('form').send({quote, attributed, source})
    assert.equal(response.status, 200);
    assert.include(parseTextFromHTML(response.text, '#quotes'), quote)
    assert.include(parseTextFromHTML(response.text, '#quotes'), attributed)
    assert.include(parseTextFromHTML(response.text, '#quotes'), source)
    });
  })
})
