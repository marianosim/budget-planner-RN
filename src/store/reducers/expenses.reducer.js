import { EXPENSES } from '../../constants';
import { expensesTypes } from '../types';

const { SELECT_EXPENSE, FILTER_EXPENSES, TOTAL_EXPENSES } = expensesTypes;

const initialState = {
  data: EXPENSES,
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
    default:
      return state;
  }
};

export default expensesReducer;
