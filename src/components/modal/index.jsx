import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const ModalItem = ({
  visible,
  animationType,
  onHandlerDeleteItem,
  onHandlerCancelModal,
  item,
  cancelButtonTitle,
  deleteButtonTitle,
}) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <Modal visible={visible} animationType={animationType}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>
          {item?.type === 'expense' ? 'Delete expense:' : 'Delete income:'}
        </Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
          <Text style={styles.selectedItem}>{item?.title}</Text>
          <Text style={styles.selectedItemAmount}>Amount: ${item?.amount}</Text>
          <Text style={styles.selectedItemDate}>Date: {formatDate(item?.date)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={cancelButtonTitle}
            color={theme.colors.primary}
            onPress={() => onHandlerCancelModal()}
          />
          <Button
            title={deleteButtonTitle}
            color={theme.colors.expenseRed}
            onPress={() => onHandlerDeleteItem(item.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalItem;
