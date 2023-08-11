# Middleware

As the name suggests, middleware is the code that runs in the middle—usually between a framework receiving a request and producing a response. In Redux, middleware runs between the moment when an action is dispatched and the moment when that action is passed along to the reducer.

Middleware intercepts actions after they are dispatched and before they are passed along to the reducer. Some common tasks that middleware perform include logging, caching, adding auth tokens to request headers, crash reporting, routing, and making asynchronous requests for data.

## Thunks

A thunk is a higher-order function that wraps the computation we want to perform later. For example, this add() function returns a thunk that will perform x+y when called. NB: calculation is actually done in `total()`

```js
const add = (x,y) => {
  return () => {
    return x + y; 
  } 
}
let total = add(6, 8)
total()
// 14 
```

```js
const remindMeTo = task => {
  return `Remember to ${task}!!!`;
}
console.log(remindMeTo('call mom'))
// Remember to call mom!!!

const remindMeLater = (task) => {
  return () => {
    return remindMeTo(task)
  }
}

let reminder = remindMeLater("walk the dog") // we have made a thunk
console.log(reminder) // [Function] 
console.log(reminder()) // Remember to walk the dog!!!
```

## Action creators that return thunks

```js
import { fetchUser } from './api'
const getUser = (id) => {
  return async (dispatch, getState) => {
    const payload = await fetchUser(id);
    dispatch({type: 'users/addUser', payload: payload});
  }
}
```

To get the user with id = 32, we can call `dispatch(getUser(32))`. Note that the argument to dispatch is not an object, but an asynchronous function that will first fetch the user’s data and then dispatch a synchronous action once the user’s information has been retrieved. 

## How?

... the redux-thunk middleware performs a simple check to the argument passed to dispatch. If dispatch receives a function, the middleware invokes it; if it receives a plain object, then it passes that action along to reducers to trigger state updates.