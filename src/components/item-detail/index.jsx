import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const ItemDetail = () => {
  const item = useSelector((state) => state.expenses.selected);
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.amount}>Amount: $ {item.amount}</Text>
        <Text style={styles.date}>Date: {formatDate(item.date)}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
        <Text style={styles.type}>Type: {item.type}</Text>
      </View>
    </View>
  );
};

export default ItemDetail;
