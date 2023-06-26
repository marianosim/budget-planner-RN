import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer, expensesReducer, incomeReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  expenses: expensesReducer,
  income: incomeReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
