/* eslint-disable no-case-declarations */
import { Picker } from '@react-native-picker/picker';
//import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { AddExpenseIncomeButton, ExpenseItem, InfoCards, Input } from '../../components';
import { theme } from '../../constants';
import {
  addExpense,
  addIncome,
  getExpensesFromDataBase,
  getIncomes,
  selectExpense,
  selectincome,
  totalExpenses,
  totalIncome,
} from '../../store/actions';
import { RESET_FORM, UPDATE_FORM, onInputChange, resetForm } from '../../utils/form';

const initialState = {
  title: { value: '', error: '', touched: false, hasError: true },
  amount: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    case RESET_FORM:
      return initialState;
  }
};

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [addingExpense, setAddingExpense] = useState(false);
  const [addingIncome, setAddingIncome] = useState(false);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [selectedCategory, setSelectedCategory] = useState();
  const categories = useSelector((state) => state.categories.data);
  const pickerRef = useRef();
  const expenses = useSelector((state) => state.expenses.data);
  const incomes = useSelector((state) => state.income.data);
  const activities = expenses?.concat(incomes);
  const expenseTotal = useSelector((state) => state.expenses.totalExpenses);
  const incomesTotal = useSelector((state) => state.income.totalIncome);
  const balanceTotal = incomesTotal - expenseTotal;
  const renderItem = ({ item }) => <ExpenseItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item?.id?.toString();
  const onSelected = (item) => {
    if (item.type === 'expense') {
      dispatch(selectExpense(item.id));
      navigation.navigate('Expense Detail', {
        name: item.name,
        color: item.color,
      });
    } else if (item.type === 'income') {
      dispatch(selectincome(item.id));
      navigation.navigate('Income Detail', {
        name: item.name,
        color: item.color,
      });
    }
  };
  const openPicker = () => {
    pickerRef.current.focus();
  };
  const closePicker = () => {
    pickerRef.current.blur();
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(getExpensesFromDataBase());
  //   }, [dispatch])
  // );
  useEffect(() => {
    dispatch(getExpensesFromDataBase());
    dispatch(getIncomes());
    dispatch(totalIncome(incomes));
    dispatch(totalExpenses(expenses));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(totalIncome(incomes));
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(totalExpenses(expenses));
  // }, [dispatch]);

  const onHandleInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  const onAddExpense = () => {
    dispatch(
      addExpense({
        title: formState.title.value,
        amount: formState.amount.value,
        category: Number(selectedCategory),
      })
    );
    dispatchFormState(resetForm());
    setAddingExpense(false);
    //navigation.navigate('Expenses');
  };

  const onAddIncome = () => {
    dispatch(
      addIncome({
        title: formState.title.value,
        amount: formState.amount.value,
      })
    );
    setAddingIncome(false);
    //navigation.navigate('Expenses');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <InfoCards
          expenseTotal={expenseTotal}
          incomesTotal={incomesTotal}
          balanceTotal={balanceTotal}
        />
      </View>
      <View style={styles.addButtonsContainer}>
        <TouchableOpacity onPress={() => setAddingExpense(true)} style={styles.touchableContainer}>
          <Text style={styles.buttonTitle}>Add Expense</Text>

          <AddExpenseIncomeButton
            buttonSymbol="-"
            bgColor="#EE959A"
            borderColor="#E87379"
            textColor="#800F1A"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAddingIncome(true)}>
          <View>
            <Text style={styles.buttonTitle}>Add Income</Text>
          </View>
          <AddExpenseIncomeButton
            buttonSymbol="+"
            bgColor="#BBDDD3"
            borderColor="#92C8B8"
            textColor="#295145"
          />
        </TouchableOpacity>
      </View>
      {addingExpense ? (
        <View style={styles.inputContainer}>
          <Input
            placeholder="Add your expense"
            placeholderTextColor={theme.colors.darkGray}
            onChangeText={(text) => onHandleInputChange({ value: text, name: 'title' })}
            value={formState.title.value}
            label="Title"
            error={formState.title.error}
            hasError={formState.title.hasError}
            touched={formState.title.touched}
          />
          <Input
            placeholder=""
            placeholderTextColor={theme.colors.darkGray}
            onChangeText={(text) => onHandleInputChange({ value: text, name: 'amount' })}
            value={formState.amount.value}
            label="Amount"
            error={formState.amount.error}
            hasError={formState.amount.hasError}
            touched={formState.amount.touched}
            keyboardType="numeric"
          />
          <View>
            <Picker
              ref={pickerRef}
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
              showSearch>
              <Picker.Item label="Select Category" value="0" disabled />
              <Picker.Item label="Supermarket" value="1" />
              <Picker.Item label="Bar & Restaurants" value="2" />
              <Picker.Item label="Transport" value="3" />
              <Picker.Item label="Bills" value="4" />
              <Picker.Item label="Shopping" value="5" />
              <Picker.Item label="Miscellaneous" value="6" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={onAddExpense} />
            <Button title="Cancel" onPress={() => setAddingExpense(false)} />
          </View>
        </View>
      ) : null}

      {addingIncome ? (
        <View style={styles.inputContainer}>
          <Input
            placeholder="Add your income"
            placeholderTextColor={theme.colors.darkGray}
            onChangeText={(text) => onHandleInputChange({ value: text, name: 'title' })}
            value={formState.title.value}
            label="Title"
            error={formState.title.error}
            hasError={formState.title.hasError}
            touched={formState.title.touched}
          />
          <Input
            placeholder="Add your amount in numbers"
            placeholderTextColor={theme.colors.darkGray}
            onChangeText={(text) => onHandleInputChange({ value: text, name: 'amount' })}
            value={formState.amount.value}
            label="Amount"
            error={formState.amount.error}
            hasError={formState.amount.hasError}
            touched={formState.amount.touched}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={onAddIncome} />
            <Button title="Cancel" onPress={() => setAddingIncome(false)} />
          </View>
        </View>
      ) : null}

      <View style={styles.expenseList}>
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.expenseListTitle}>Your last expenses:</Text>
            </>
          }
          data={activities?.sort((a, b) => b.date - a.date)}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default Home;
