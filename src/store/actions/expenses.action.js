import { expensesTypes } from '../types';

const { SELECT_EXPENSE, FILTER_EXPENSES, TOTAL_EXPENSES } = expensesTypes;

export const selectExpense = (id) => ({
  type: SELECT_EXPENSE,
  expenseId: id,
});

export const filterExpenses = (id) => ({
  type: FILTER_EXPENSES,
  categoryId: id,
});

export const totalExpenses = (amount) => ({
  type: TOTAL_EXPENSES,
  expenseAmount: amount,
});
