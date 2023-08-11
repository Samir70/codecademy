import { createStore, applyMiddleware } from 'redux';

const messageReducer = (state = '', action) => {
  console.log("messageReducer has been called", action)
  if (action.type === 'NEW_MESSAGE') {
    return action.payload;
  } else {
    return state;
  }
}

// Paste the logger function here.
const logger = storeAPI => next => action => {
  console.log("original state", storeAPI.getState())
 
  const nextState = next(action);
  console.log("nextState:", nextState)
  console.log("viaGetState:", store.getState())
  return nextState
};
const store = createStore(messageReducer, '', applyMiddleware(logger));

store.dispatch({
  type: 'NEW_MESSAGE', 
  payload: 'I WROTE A MIDDLEWARE'
})

/**
 * messageReducer has been called { type: '@@redux/INITh.5.v.9.r.r.9.0.n.i.z.i.k.b.b.a.k.y.b.9' }
original state 
messageReducer has been called { type: 'NEW_MESSAGE', payload: 'I WROTE A MIDDLEWARE' }
nextState: { type: 'NEW_MESSAGE', payload: 'I WROTE A MIDDLEWARE' }
viaGetState: I WROTE A MIDDLEWARE
 */