# Mocking with Jest

```js
// file: utils/__mocks__/api-request.js
// to mock module in utils/api-request.js
// Create a Jest mock function with the same name as the function we're mocking
const apiRequest = jest.fn(() => {
  //Return a resolved Promise with a mock response object
  return Promise.resolve({ 
    status: "", 
    data: {} 
  });
});

export default apiRequest;
```

```js
// in test file
import { findRecipe } from './recipes.js'; 

// import the actual module
import apiRequest from './api-request.js';

// then, tell Jest to mock the implementation!
jest.mock('./api-request.js');

it("Gets the full recipe for a dish", async () => {
  // arrange  
  const dish = "Pesto";
  const expectedValue = { "Magical Deliciousness": "3 cups" };

  // set the resolved value for the next call to apiRequest  
  const mockResponse = {
    status: "mock",
    data: { "Magical Deliciousness": "3 cups" }
  }
  apiRequest.mockResolvedValueOnce(mockResponse);

  // act  
  const actualRecipe = await findRecipe(dish);
 
  // assert
  expect(actualRecipe).toEqual(expectedValue);
});


```