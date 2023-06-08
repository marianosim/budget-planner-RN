import { incomeTypes } from '../types';

const { GET_INCOME, SELECT_INCOME, ADD_INCOME, TOTAL_INCOME } = incomeTypes;

const initialState = {
  data: [],
  selected: null,
  totalIncome: null,
};

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCOME:
      return {
        ...state,
        data: action.income,
      };
    default:
      return state;
  }
};

export default incomeReducer;
