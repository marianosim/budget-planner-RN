import { createStore, combineReducers } from 'redux';

import { categoriesReducer } from './reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default createStore(rootReducer);
