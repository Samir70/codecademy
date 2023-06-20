// Write your function here:

const conversions = {
  'Mercury': 0.378,
  "Venus": 0.907,
  "Mars": 0.377,
  "Jupiter": 2.36,
  "Saturn": 0.916
}
const calculateWeight = (earthWeight, planet) => {
  if (conversions[planet] === undefined) {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
  return earthWeight * conversions[planet]
}

const emoticons = {
  'shrug': '|_{"}_|',
  'smiley face': ':)',
  'frowny face': ':(',
  'winky face': ';)',
  'heart': '<3',
  "other": '|_(* ~ *)_|',
}

const toEmoticon = emotion => {
  return emoticons[emotion] ? emoticons[emotion] : '|_(* ~ *)_|'
}







// Uncomment the line below when you're ready to try out your function
// console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// We encourage you to add more function calls of your own to test your code!