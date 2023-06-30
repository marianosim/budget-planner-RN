/* eslint-disable no-case-declarations */
import { expensesTypes } from '../types';

const {
  SELECT_EXPENSE,
  FILTER_EXPENSES,
  TOTAL_EXPENSES,
  ADD_EXPENSE,
  GET_EXPENSES,
  DELETE_EXPENSE,
} = expensesTypes;

const initialState = {
  data: [],
  selected: null,
  filteredExpenses: [],
  totalExpenses: null,
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        data: action.expenses,
      };
    case SELECT_EXPENSE:
      return {
        ...state,
        selected: state.data.find((expense) => expense.id === action.expenseId),
      };
    case FILTER_EXPENSES:
      return {
        ...state,
        filteredExpenses: state.data.filter((expense) => expense.category === action.categoryId),
      };
    case TOTAL_EXPENSES:
      return {
        ...state,
        totalExpenses: action.totalAmount,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        data: [...state.data, action.expense],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        data: state.data.filter((expense) => expense.id !== action.id),
      };

    default:
      return state;
  }
};

export default expensesReducer;
