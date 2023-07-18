async function fivePromise() {
  return 5;
}

fivePromise()
  .then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

//////////////////////////////////////
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

// Write your code below:
async function withAsync(num) {
  if (num === 0) {
    return "zero"
  } else {
    return "not zero"
  }
}

// Leave this commented out until step 3:
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
async function noAwait() {
  let value = myPromise();
  console.log(value);
}

async function yesAwait() {
  let value = await myPromise();
  // the await operator returns the resolved value of a promise
  console.log(value);
 }
  
 noAwait(); // Prints: Promise { <pending> }
 yesAwait(); // Prints: Yay, I resolved!