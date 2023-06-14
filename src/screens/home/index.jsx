/* eslint-disable no-case-declarations */
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { AddExpenseIncomeButton, ExpenseItem, InfoCards, Input } from '../../components';
import { theme } from '../../constants';
import {
  addExpense,
  getExpenses,
  getExpensesFromDataBase,
  selectExpense,
  totalExpenses,
} from '../../store/actions';
import { UPDATE_FORM, onInputChange } from '../../utils/form';

const initialState = {
  title: { value: '', error: '', touched: false, hasError: true },
  amount: { value: '', error: '', touched: false, hasError: true },
  //category: { value: '', error: '', touched: false, hasError: true },
  // type: { value: '', error: '', touched: false, hasError: true },
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
  const expenseTotal = useSelector((state) => state.expenses.totalExpenses);
  const renderItem = ({ item }) => <ExpenseItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  const onSelected = (item) => {
    dispatch(selectExpense(item.id));
    navigation.navigate('Detail', {
      name: item.name,
      color: item.color,
    });
  };
  const openPicker = () => {
    pickerRef.current.focus();
  };
  const closePicker = () => {
    pickerRef.current.blur();
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(getExpenses());
  //   }, [dispatch])
  // );
  useEffect(() => {
    dispatch(getExpensesFromDataBase());
    console.log('expenses:', expenses);
  }, [dispatch]);

  useEffect(() => {
    dispatch(totalExpenses(expenses));
  }, [dispatch]);

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
    console.log('expenses:', expenses);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <InfoCards expenseTotal={expenseTotal} />
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
          />
          <View>
            <Picker
              ref={pickerRef}
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}>
              <Picker.Item label="Supermarket" value="1" />
              <Picker.Item label="Bar & Restaurants" value="2" />
              <Picker.Item label="Transport" value="3" />
              <Picker.Item label="Bills" value="4" />
              <Picker.Item label="Shopping" value="5" />
              <Picker.Item label="Miscellaneous" value="6" />
            </Picker>
          </View>

          {/* <Input
            placeholder=""
            placeholderTextColor={theme.colors.darkGray}
            onChangeText={(text) => onHandleInputChange({ value: text, name: 'type' })}
            value={formState.type.value}
            label="Type"
            error={formState.type.error}
            hasError={formState.type.hasError}
            touched={formState.type.touched}
          /> */}
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={onAddExpense} />
            <Button title="Cancel" onPress={() => setAddingExpense(false)} />
          </View>
        </View>
      ) : null}

      {addingIncome ? (
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
          />
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={() => null} />
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
          data={expenses}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default Home;
