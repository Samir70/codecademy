// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux'
// Import the slice reducers here.
import { cartReducer } from '../features/cart/cartSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';

// Create and export the store here.
const rootReducer = combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer
});

export const store = createStore(rootReducer)