console.log('hi');
const choices = ['rock', 'paper', 'scissors'];
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if (choices.indexOf(userInput) !== -1) {
    return userInput
  } else {
    console.log(`${userInput} is not a valid choice!`)
  }
}

const getComputerChoice = () => {
  let c = Math.floor(Math.random() * 3);
  return choices[c]
}

// console.log(getComputerChoice())

const determineWinner = (user, comp) => {
  console.log(`Computer chose ${comp} and user chose ${user}`)
  if (user === comp) {
    return "The game was a tie"
  } else if (user === "rock") {
    return comp === "paper" ? "Computer wins!!" : "User won!!"
  } else if (user === "paper") {
    return comp === "scissors" ? "Computer wins!!" : "User won!!"
  } else if (user === "scissors") {
    return comp === "rock" ? "Computer wins!!" : "User won!!"
  }
}

// console.log(determineWinner("rock", "rock"))
// console.log(determineWinner("rock", "paper"))
// console.log(determineWinner("rock", "scissors"))
// console.log(determineWinner("paper", "scissors"))
// console.log(determineWinner("paper", "rock"))
// console.log(determineWinner("scissors", "paper"))

const playGame = () => {
  let userChoice = getUserChoice("rock")
  console.log(determineWinner(userChoice, getComputerChoice()))
}

playGame()