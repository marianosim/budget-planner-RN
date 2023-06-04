import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer, expensesReducer } from './reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
