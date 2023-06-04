/* eslint-disable no-case-declarations */
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useReducer } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem, InfoCards, Input } from '../../components';
import { theme } from '../../constants';
import { addExpense, getExpenses } from '../../store/actions';
import { UPDATE_FORM, onInputChange } from '../../utils/form';

const initialState = {
  title: { value: '', error: '', touched: false, hasError: true },
  amount: { value: '', error: '', touched: false, hasError: true },
  //category: { value: '', error: '', touched: false, hasError: true },
  type: { value: '', error: '', touched: false, hasError: true },
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
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const expenses = useSelector((state) => state.expenses.data);
  const renderItem = ({ item }) => <ExpenseItem item={item} />;
  const keyExtractor = (item) => item?.id.toString();

  const categories = useSelector((state) => state.categories.data);

  useFocusEffect(
    useCallback(() => {
      dispatch(getExpenses());
    }, [dispatch])
  );
  // useEffect(() => {
  //   dispatch(getExpenses());
  // }, []);

  const onHandleInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  const onAddExpense = () => {
    dispatch(
      addExpense({
        title: formState.title.value,
        amount: formState.amount.value,
        type: formState.type.value,
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <InfoCards />
      </View>
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

        <Input
          placeholder=""
          placeholderTextColor={theme.colors.darkGray}
          onChangeText={(text) => onHandleInputChange({ value: text, name: 'type' })}
          value={formState.type.value}
          label="Type"
          error={formState.type.error}
          hasError={formState.type.hasError}
          touched={formState.type.touched}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={onAddExpense} />
      </View>
      <View style={styles.expenseList}>
        <Text style={styles.expenseListTitle}>Your expenses:</Text>
        <FlatList data={expenses} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
    </View>
  );
};

export default Home;
