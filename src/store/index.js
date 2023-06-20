import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer, expensesReducer, incomeReducer } from './reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer,
  income: incomeReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
