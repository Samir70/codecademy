# Testing async functions

## Async functions that use callbacks

```js
it("Gets the full recipe for pesto", () => {
  //arrange
  // ...

  //act  
  // findRecipe makes an api call with first param and passes result to callback
  findRecipe(dish, (actualRecipe) => {
    //assert
    expect(actualRecipe).toEqual(expectedRecipe);
    expect(undefined).toBeDefined(); // No way this passes, right?
  });
});
```

Above passes because Jest doesn't know to wait for the callback to run

Passing `done` to `it`'s callback makes Jest wait for the callback to use `done`

```js
it("Gets the full recipe for pesto", (done) => {
  //arrange
  // ...

  //act  
  findRecipe(dish, (actualRecipe) => {
    //assert
    try {
      expect(actualRecipe).toEqual(expectedRecipe);
      done();
    } catch (error) {
      done(error);
    }   
  });
```

## Alt: functions that return promises

```js
it("Gets the full recipe for pesto", async () => {
  //arrange
  // ...
 
  //act  
  const actualRecipe = await findRecipe(dish);
  
  //assert
  expect(actualRecipe).toEqual(expectedRecipe);
});

```