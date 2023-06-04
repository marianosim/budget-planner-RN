/* eslint-disable no-case-declarations */
import { EXPENSES } from '../../constants';
import { expensesTypes } from '../types';

const { SELECT_EXPENSE, FILTER_EXPENSES, TOTAL_EXPENSES, ADD_EXPENSE, GET_EXPENSES } =
  expensesTypes;

const initialState = {
  data: [],
  selected: null,
  filteredExpenses: [],
  totalExpenses: null,
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
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
        totalExpenses: state.data.reduce((acc, expense) => (acc += Number(expense.amount)), 0),
      };
    case ADD_EXPENSE:
      return {
        ...state,
        data: [...state.data, action.expense],
      };
    case GET_EXPENSES:
      return {
        ...state,
        data: action.expenses,
      };

    default:
      return state;
  }
};

export default expensesReducer;
