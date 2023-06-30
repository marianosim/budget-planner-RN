/* eslint-disable no-unused-vars */
import { FIREBASE_REALTIME_DB_URL } from '../../constants';
import {
  deleteExpenseFromDB,
  insertExpense,
  selectExpensesFromDB,
  selectLastExpenseFromDB,
  selectSingleExpenseFromDB,
  updateExpense,
} from '../../db';
import { URL_GEOCODING } from '../../utils/maps';
import { expensesTypes } from '../types';

const {
  SELECT_EXPENSE,
  FILTER_EXPENSES,
  TOTAL_EXPENSES,
  ADD_EXPENSE,
  GET_EXPENSES,
  DELETE_EXPENSE,
} = expensesTypes;

export const getExpensesFromDataBase = () => {
  return async (dispatch) => {
    try {
      const dbResult = await selectExpensesFromDB();
      const expenses = dbResult?.rows?._array;
      dispatch({
        type: GET_EXPENSES,
        expenses,
      });
      const totalAmount = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
      dispatch({
        type: TOTAL_EXPENSES,
        totalAmount,
      });
    } catch (error) {
      console.error(error);
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

export const addExpense = ({
  title,
  amount,
  category,
  type = 'expense',
  image = '',
  address = '',
  coords = '',
  date = Date.now(),
}) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertExpense(
        title,
        amount,
        category,
        type,
        image,
        address,
        coords,
        date
      );
      const dbResponse = await selectLastExpenseFromDB();
      const [newExpense] = dbResponse?.rows?._array;

      dispatch({
        type: ADD_EXPENSE,
        expense: newExpense,
      });
      const dbRequest = await selectExpensesFromDB();
      const expenses = dbRequest?.rows?._array;
      dispatch({
        type: GET_EXPENSES,
        expenses,
      });
      const totalAmount = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
      dispatch({
        type: TOTAL_EXPENSES,
        totalAmount,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addExpenseImageLocation = ({ id, image, address, coords }) => {
  return async (dispatch) => {
    try {
      const geocodingResponse = await fetch(URL_GEOCODING(coords.lat, coords.lng));
      if (!geocodingResponse.ok) {
        throw new Error('Problem with coords!');
      }
      const geocodingData = await geocodingResponse.json();
      if (!geocodingData.results) {
        throw new Error("Address couldn't be found!");
      }
      const newAddress = geocodingData.results[0].formatted_address;

      const dbResult = await updateExpense(id, image, (address = newAddress), coords);
      const dbRequestExpenses = await selectExpensesFromDB();
      const expenses = dbRequestExpenses?.rows?._array;
      dispatch({
        type: GET_EXPENSES,
        expenses,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const totalExpenses = (expenses) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  return {
    type: TOTAL_EXPENSES,
    totalAmount,
  };
};

export const deleteExpense = (id) => {
  return async (dispatch) => {
    try {
      const dbRequest = await selectSingleExpenseFromDB(id);
      const [expenseToDelete] = dbRequest?.rows?._array;
      dispatch({
        type: DELETE_EXPENSE,
        id: expenseToDelete.id,
      });
      const dbResult = await deleteExpenseFromDB(id);
      const dbRequestExpenses = await selectExpensesFromDB();
      const expenses = dbRequestExpenses?.rows?._array;
      dispatch({
        type: GET_EXPENSES,
        expenses,
      });
      const totalAmount = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
      dispatch({
        type: TOTAL_EXPENSES,
        totalAmount,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
