import { FIREBASE_REALTIME_DB_URL } from '../../constants';
import { expensesTypes } from '../types';

const {
  SELECT_EXPENSE,
  FILTER_EXPENSES,
  TOTAL_EXPENSES,
  ADD_EXPENSE,
  GET_EXPENSES,
  ADD_IMAGE_LOCATION,
} = expensesTypes;

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

export const selectExpense = (id) => ({
  type: SELECT_EXPENSE,
  expenseId: id,
});

export const filterExpenses = (id) => ({
  type: FILTER_EXPENSES,
  categoryId: id,
});

export const totalExpenses = (expenses) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  return {
    type: TOTAL_EXPENSES,
    totalAmount,
  };
};

export const addExpense = ({ title, amount, category, type }) => {
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
          category,
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

export const addExpenseImageLocation = ({ id, title, amount, category, type, image }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/expenses/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          body: JSON.stringify({
            title,
            amount,
            category,
            type,
            image,
          }),
        },
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const result = await response.json();

      dispatch({
        type: ADD_IMAGE_LOCATION,
        updatedExpense: result,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
