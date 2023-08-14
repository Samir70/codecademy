const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(twoDGrid) {
    this.field = twoDGrid
    this.r = 0
    this.c = 0
  }
  print() {
    for (let row of this.field) {
      console.log(row.join(""))
    }
  }
  move(dir) {
    let gameOver = false, message = ""
    switch (dir) {
      case 'u': {
        if (this.r === 0) {
          message = "You fell off the top of the board!!"
          gameOver = true
        } else if (this.field[this.r - 1][this.c] === hole) {
          message = "You fell down a hole"
          gameOver = true
        } else {
          this.r--
        }
        break
      }
      case 'd': {
        if (this.r === this.field.length - 1) {
          message = "You fell off the bottom of the board!!"
          gameOver = true
        } else if (this.field[this.r + 1][this.c] === hole) {
          message = "You fell down a hole"
          gameOver = true
        } else {
          this.r++
        }
        break
      }
      case 'r': {
        if (this.c === this.field[0].length - 1) {
          message = "You fell off the right of the board!!"
          gameOver = true
        } else if (this.field[this.r][this.c+1] === hole) {
          message = "You fell down a hole"
          gameOver = true
        } else {
          this.c++
        }
        break
      }
      case 'l': {
        if (this.c === 0) {
          message = "You fell off the left of the board!!"
          gameOver = true
        } else if (this.field[this.r][this.c-1] === hole) {
          message = "You fell down a hole"
          gameOver = true
        } else {
          this.c--
        }
        break
      }
      default: {
        console.log(`I don't know how to handle moves in the ${dir} direction!`)
      }
    }
    if (this.field[this.r][this.c] === hat) {
      message = "You found your hat!!!!! Well done!"
      gameOver = true;
    } else {
      // console.log("You haven't found your hat yet")
      this.field[this.r][this.c] = pathCharacter

    }
    return { gameOver, message }
  }
  static generateField(rows, cols, percentageHoles = 10) {
    let grid = []
    for (let r = 0; r < rows; r++) {
      grid.push(Array(cols).fill(fieldCharacter))
    }
    grid[0][0] = pathCharacter;
    const rndSq = () => [Math.floor(Math.random() * rows), Math.floor(Math.random() * cols)]
    let [r, c] = rndSq()
    grid[r][c] = hat
    if (percentageHoles < 0 || percentageHoles > 100) {percentageHoles = 10}
    let numHoles = rows*cols*percentageHoles/100
    for (let i = 0; i < numHoles; i++) {
      let [r, c] = rndSq()
      grid[r][c] = hole
    }
    return grid
  }
}

// const myField = new Field([
//   ['*', '░', '░', 'O'],
//   ['░', 'O', '░', '░'],
//   ['O', '^', '░', '░'],
//   ['░', 'O', '░', '░'],
// ]);

const myField = new Field(Field.generateField(5, 6, 20))

myField.print()

let playGame = (userInput) => {
  let input = userInput.toString().trim().toLowerCase();
  updateField(input);
};

process.stdin.on('data', playGame);
const pickDirectionPrompt = () => console.log("Pick a direction u/d/l/r....")
pickDirectionPrompt()
const updateField = (direction) => {
  if (direction && 'udlr'.includes(direction)) {
    outcome = myField.move(direction)
    if (outcome.gameOver) { 
      console.log(outcome.message)
      process.exit() 
    }
    myField.print()
    pickDirectionPrompt()
  } else {
    console.log("That isn't one of the options!")
    process.exit()
  }
}