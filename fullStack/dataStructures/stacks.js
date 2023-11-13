const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack()
const nextPages = new Stack()
const defaultPage = "http://nowhere.com"
let currentPage = defaultPage;
// ------------------------------
// Helper Functions
// ------------------------------

const showCurrentPage = (action) => {
  if (action.type = "visit new page") { visit(action.target) }
  return {
    userAction: action.type, currentPage, backPage: backPages.peek(), nextPage: nextPages.peek()
  }
}

const newPage = (page) => {
  backPages.push(currentPage);
  nextPages = new Stack();
  currentPage = page;
  showCurrentPage({ type: "visit new page", target: page })
}

const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage({ type: "visit new page", target: currentPage })
}

const nextPage = () => {
  backPages.push(currentPage)
  currentPage = nextPages.pop()
  showCurrentPage({ type: "visit new page", target: currentPage })
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------

// ------------------------------
// User Interface Part 2
// ------------------------------
