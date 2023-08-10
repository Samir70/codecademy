import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';

import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


/**
 * A selector:

    Takes state as an argument.
    Returns what is needed by the component from state.

 */

// Todos.js
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from 'todosSlice.js';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  // const todos = useSelector(state => state.todos);
  // within component definition
  const dispatch = useDispatch()
  dispatch({ type: 'addTodo', payload: 'Always start with this on the list' });

  return (
    <p>{todos}</p>
  )
};