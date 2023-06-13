/* eslint-disable no-case-declarations */
import { expensesTypes } from '../types';

const {
  SELECT_EXPENSE,
  FILTER_EXPENSES,
  TOTAL_EXPENSES,
  ADD_EXPENSE,
  GET_EXPENSES,
  ADD_IMAGE_LOCATION,
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
    case ADD_IMAGE_LOCATION:
      // const expenseToUpdate = state.data.find((expense) => expense.id === action.updatedExpense.id);
      return {
        ...state,
        data: [...state.data, ...action.updatedExpense],
      };

    default:
      return state;
  }
};

export default expensesReducer;
