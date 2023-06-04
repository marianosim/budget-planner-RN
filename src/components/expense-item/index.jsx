import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

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
          <Text style={styles.amount}>$ {item.amount}</Text>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseItem;
