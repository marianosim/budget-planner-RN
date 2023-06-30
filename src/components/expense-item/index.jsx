import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../constants';
import { deleteExpenseFromDB } from '../../db';
import { deleteExpense, deleteIncome } from '../../store/actions';
import ModalItem from '../modal';

const ExpenseItem = ({
  item,
  onSelected,
  modalVisible,
  setModalVisible,
  onHandlerCancelModal,
  onHandlerModal,
  selectedItem,
}) => {
  const dispatch = useDispatch();
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  // const onDeleteExpense = (id) => {
  //   dispatch(deleteExpense(id));
  // };

  // const onDeleteIncome = (id) => {
  //   dispatch(deleteIncome(id));
  // };
  const onHandlerDeleteItem = (id) => {
    if (selectedItem.type === 'expense') {
      dispatch(deleteExpense(id));
      setModalVisible(!modalVisible);
    } else {
      dispatch(deleteIncome(id));
      setModalVisible(!modalVisible);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.name}>{item?.title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <View
              style={{
                ...styles.amountBadge,
                backgroundColor:
                  item?.type === 'expense' ? theme.colors.expenseRed : theme.colors.incomeGreen,
              }}>
              <Text style={styles.amount}>
                {item?.type === 'expense'
                  ? `-$ ${Number(item?.amount).toLocaleString('ES-AR')}`
                  : `$ ${Number(item?.amount).toLocaleString('ES-AR')}`}
              </Text>
            </View>
            <Text style={styles.date}>{formatDate(item?.date)}</Text>
          </View>

          <View style={styles.deleteButton}>
            <TouchableOpacity>
              <Ionicons
                name="trash"
                size={25}
                color={theme.colors.expenseRed}
                onPress={
                  () => onHandlerModal(item.id)
                  // item.type === 'expense' ? onDeleteExpense(item.id) : onDeleteIncome(item.id)
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <ModalItem
        visible={modalVisible}
        animationType="slide"
        item={selectedItem}
        onHandlerCancelModal={onHandlerCancelModal}
        onHandlerDeleteItem={onHandlerDeleteItem}
        cancelButtonTitle="Cancel"
        deleteButtonTitle="Delete"
      />
    </View>
  );
};

export default ExpenseItem;
