// npm install @reduxjs/toolkit
/**
 `createSlice()` has one parameter, `options`, 
 which is an object with the following properties
 * `name`: a string that is used as the prefix for generated action types
 * `initialState`: the initial state value for the reducer
 * `reducers`: an object of methods, 
 *          where the keys determine the action `type` strings that can 
 *          update the state, and whose methods are reducers that will be 
 *          executed when that action type is dispatched. 
 *    These are sometimes referred to as "case reducers", 
 *    because they're similar to a case in a switch statement.
 
 */

/* todosSlice.js */
import { createSlice } from '@reduxjs/toolkit';
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
 })
  
 /* Object returned by todosSlice */
 todosSlice = {
  name: 'todos',
  reducer: (state, action) => newState,
  actions: {
    addTodo: (payload) => ({type: 'todos/addTodo', payload}),
    toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
  },
  // case reducers field omitted
 }

 export const { addTodo, toggleTodo } = todosSlice.actions
 export default todosSlice.reducer;
 