const { assert } = require('chai');

describe('poetry web app', () => {
  describe('user visits root', () => {
    it('page starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#poems'), '')
    });

    describe('user submits poem', () => {
      it('saves the user poem and title', () => {
        // Setup phase
        const title = 'Words Birth Worlds';
        const poem = 'Our words are marvelous weapons with which we could behead the sun';
        // Exercise phase
        browser.url('/');
        browser.setValue('input[id=title]', title);
        browser.setValue('textarea[id=poem]', poem);
        browser.click('input[type=submit]');
        // verification phase
        assert.include(browser.getText('#poems'), title);
        assert.include(browser.getText('#poems'), poem);
      });
    });
  });
});
