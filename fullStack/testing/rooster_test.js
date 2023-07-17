const assert = require("assert");
const Rooster = require("./rooster");

describe("Rooster", () => {
  describe("announce dawn", () => {
    it("returns a rooster call", () => {
      const expected = "cockadoodaldo!";
      const returned = Rooster.announceDawn()
      assert.strictEqual(expected, returned)
    })
  })
  describe("time at dawn", () => {
    it("throws an error if time is less than 0", () => {
      assert.throws(() => Rooster.timeAtDawn(-7), {name: "RangeError"})
    })
    it("throws an error if time is greater than 23", () => {
      assert.throws(() => Rooster.timeAtDawn(26), {name: "RangeError"})
    })

    it("gives the time at dawn as a string", () => {
      const expected = "7";
      const hour = 7;
      const returned = Rooster.timeAtDawn(hour)
  
      assert.strictEqual(expected, returned)
    })
  })
})
