import { createStore, combineReducers } from 'redux';

import { categoriesReducer, expensesReducer } from './reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer,
});

export default createStore(rootReducer);
