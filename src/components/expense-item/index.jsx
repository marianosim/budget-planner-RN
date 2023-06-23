import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../constants';
import { deleteExpenseFromDB } from '../../db';
import { deleteExpense } from '../../store/actions';

const ExpenseItem = ({ item, onSelected }) => {
  const dispatch = useDispatch();
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  const onDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
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
                ${' '}
                {item?.type === 'expense'
                  ? `-${Number(item?.amount).toLocaleString('ES-AR')}`
                  : Number(item?.amount).toLocaleString('ES-AR')}
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
                onPress={() => onDeleteExpense(item.id)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseItem;
