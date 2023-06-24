import { incomeTypes } from '../types';

const { GET_INCOME, SELECT_INCOME, ADD_INCOME, TOTAL_INCOME, DELETE_INCOME } = incomeTypes;

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
        data: action.incomes,
      };
    case SELECT_INCOME:
      return {
        ...state,
        selected: state.data.find((income) => income.id === action.incomeId),
      };
    case ADD_INCOME:
      return {
        ...state,
        data: [...state.data, action.income],
      };
    case TOTAL_INCOME:
      return {
        ...state,
        totalIncome: action.totalIncomeAmount,
      };
    case DELETE_INCOME:
      return {
        ...state,
        data: state.data.filter((income) => income.id !== action.id),
      };

    default:
      return state;
  }
};

export default incomeReducer;
