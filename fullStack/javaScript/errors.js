console.log(Error('User missing name'))
// shows error in console with line number and stacktrace, but continues to run program

// throw Error('Username or password does not match');
// this will stop the program running


try {
  throw Error("Fake Error!")
} catch (e) {
  console.log(e)
}

const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}


