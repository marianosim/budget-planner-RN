import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const ExpenseItem = ({ item, onSelected }) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.name}>{item.title}</Text>
        </View>
        <View>
          <View
            style={{
              ...styles.amountBadge,
              backgroundColor:
                item.type === 'expense' ? theme.colors.expenseRed : theme.colors.incomeGreen,
            }}>
            <Text style={styles.amount}>
              $ {item.type === 'expense' ? `-${item.amount}` : item.amount}
            </Text>
          </View>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseItem;
