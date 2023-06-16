import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../constants';

const ItemDetail = () => {
  const categories = useSelector((state) => state.categories.data);
  const item = useSelector((state) => state.expenses.selected);
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  const indexCategory = categories.findIndex((category) => category.id === item.category);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
          {item.type === 'expense' ? (
            <Ionicons name="caret-down" size={25} color={theme.colors.expenseRed} />
          ) : (
            <Ionicons name="caret-up" size={25} color={theme.colors.incomeGreen} />
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.amount}>Amount: $ -{item.amount}</Text>
          <Text style={styles.date}>Date: {formatDate(item.date)}</Text>
          <Text style={styles.category}>Category: {categories[indexCategory].name}</Text>
          <Text style={styles.type}>Type: {item.type}</Text>
          <Image source={item.image} />
          <Text style={styles.address}>Address: {item.address}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemDetail;
