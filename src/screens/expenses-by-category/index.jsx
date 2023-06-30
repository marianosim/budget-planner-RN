import { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem } from '../../components';
//import { EXPENSES } from '../../constants';
import { filterExpenses, selectExpense } from '../../store/actions';

const ExpensesByCategory = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const filteredExpenses = useSelector((state) => state.expenses.filteredExpenses);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(filterExpenses(category.id));
  }, []);

  // const filteredExpenses = EXPENSES.filter((expense) => expense.category === category.id);

  const renderItem = ({ item }) => (
    <ExpenseItem
      item={item}
      selectedItem={selectedItem}
      onSelected={onSelected}
      onHandlerModal={onHandlerModal}
      onHandlerCancelModal={onHandlerCancelModal}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
  const keyExtractor = (item) => item.id.toString();
  const onSelected = (item) => {
    dispatch(selectExpense(item.id));
    navigation.navigate('Expense Detail', {});
  };

  const onHandlerModal = (id) => {
    setModalVisible(!modalVisible);
    const selection = filteredExpenses.find((item) => item.id === id);
    setSelectedItem(selection);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredExpenses} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default ExpensesByCategory;
