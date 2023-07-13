class ShiftCipher {
  constructor(shift) {
    this.shift = shift
  }
  static shiftString(str, shift) {
    let out = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let char of str) {
      let inLower = alphabet.indexOf(char);
      let inUpper = alphabet.toUpperCase().indexOf(char);
      if (inLower !== -1) {
        let newIndex = inLower + shift;
        if (newIndex < 0) { newIndex += 26 }
        if (newIndex >= 26) { newIndex -= 26 }
        out += alphabet[newIndex]
      } else if (inUpper !== -1) {
        let newIndex = inUpper + shift;
        if (newIndex < 0) { newIndex += 26 }
        if (newIndex >= 26) { newIndex -= 26 }
        out += alphabet.toUpperCase()[newIndex]
      } else {
        out += char
      }
    }
    // console.log(out)
    return out
  }
  encrypt(str) { return ShiftCipher.shiftString(str, this.shift) }
  decrypt(str) { return ShiftCipher.shiftString(str, -this.shift) }
}

// ShiftCipher.shiftString("I Love to Code", 4)
// ShiftCipher.shiftString("M Pszi xs Gshi", -4)
let fourShifter = new ShiftCipher(4)
console.log(fourShifter.encrypt("I <3 life!!"))
console.log(fourShifter.decrypt("M <3 pmji!!"))