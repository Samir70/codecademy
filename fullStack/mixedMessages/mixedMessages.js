const {starters, middles, endings} = require("./sentenceParts")
const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]

let starter = pickRandom(starters)
let middle = pickRandom(middles)
let ending = pickRandom(endings)

console.log(starter + middle + ending)