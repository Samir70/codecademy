const assert = require('assert');

describe('Math', () => {
  describe('.min', () => {
    it('returns the argument with the lowest value', () => {
      // Your test goes here
      assert.ok(Math.min(6, 3, 7) === 3)
    });
    it('returns Infinity when no arguments are provided', () => {
      // Your test goes here
      assert.ok(Math.min() === Infinity)
    });
  });
});