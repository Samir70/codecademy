var assert = require("assert");
var Calculate =  require('./factorial.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it("confirms that 5! === 120", () => {
      const inputVal = 5;
      const expected = 120;
      const result = Calculate.factorial(inputVal);
      assert.equal(result, expected)
    })
    it("confirms that 6! === 720", () => {
      const inputVal = 6;
      const expected = 720;
      const result = Calculate.factorial(inputVal);
      assert.equal(result, expected)
    })
    it("confirms that 0! === 1", () => {
      const inputVal = 0;
      const expected = 1;
      const result = Calculate.factorial(inputVal);
      assert.equal(result, expected)
    })
  });
});