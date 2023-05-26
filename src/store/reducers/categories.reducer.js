import { CATEGORIES } from '../../constants';

const initialState = {
  data: CATEGORIES,
  selected: null,
};

const categoriesReducer = (state = initialState, action) => {
  return state;
};

export default categoriesReducer;
