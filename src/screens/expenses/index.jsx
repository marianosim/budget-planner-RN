import { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem } from '../../components';
import { selectExpense } from '../../store/actions';

const Expenses = ({ navigation }) => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.data);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
  const onHandlerModal = (id) => {
    setModalVisible(!modalVisible);
    const selection = expenses.find((item) => item.id === id);
    setSelectedItem(selection);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  };
  const keyExtractor = (item) => item?.id?.toString();
  const onSelected = (item) => {
    dispatch(selectExpense(item.id));
    navigation.navigate('Expense Detail', {
      //expenseId: item.id,
      //color: item.color,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={expenses.sort((a, b) => b.date - a.date)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Expenses;
