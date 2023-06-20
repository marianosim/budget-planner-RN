import { FIREBASE_REALTIME_DB_URL } from '../../constants';
import { incomeTypes } from '../types';

const { GET_INCOME, SELECT_INCOME, ADD_INCOME, TOTAL_INCOME } = incomeTypes;

export const getIncomes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/income.json`);
      const result = await response.json();

      const incomes = Object.keys(result).map((key) => ({
        ...result[key],
        id: key.toString(),
      }));
      dispatch({
        type: GET_INCOME,
        incomes,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectincome = (id) => ({
  type: SELECT_INCOME,
  incomeId: id,
});

export const addIncome = ({ title, amount }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/income.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          amount,
          type: 'income',
          date: Date.now(),
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const result = await response.json();
      // const { title, amount, category, type, image, address, coords, date } = result;

      dispatch({
        type: ADD_INCOME,
        income: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const totalIncome = (incomes) => {
  const totalIncomeAmount = incomes.reduce((acc, income) => acc + Number(income.amount), 0);
  return {
    type: TOTAL_INCOME,
    totalIncomeAmount,
  };
};
