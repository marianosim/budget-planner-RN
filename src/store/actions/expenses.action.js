import { FIREBASE_REALTIME_DB_URL } from '../../constants';
import { expensesTypes } from '../types';

const { SELECT_EXPENSE, FILTER_EXPENSES, TOTAL_EXPENSES, ADD_EXPENSE, GET_EXPENSES } =
  expensesTypes;

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

export const addExpense = ({ title, amount, type }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/expenses.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          title,
          amount,
          type,
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const result = await response.json();
      dispatch({
        type: ADD_EXPENSE,
        expense: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExpenses = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/expenses.json`);
      const result = await response.json();

      const expenses = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({
        type: GET_EXPENSES,
        expenses,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
