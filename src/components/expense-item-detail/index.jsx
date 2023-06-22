import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../constants';

const ExpenseItemDetail = () => {
  const categories = useSelector((state) => state.categories.data);
  const expenseItem = useSelector((state) => state.expenses.selected);
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  const indexCategory = categories?.findIndex((category) => category.id === expenseItem.category);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{expenseItem.title}</Text>
          <Ionicons name="caret-down" size={25} color={theme.colors.expenseRed} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.amount}>Amount: $ -{expenseItem.amount}</Text>
          <Text style={styles.date}>Date: {formatDate(expenseItem.date)}</Text>
          <Text style={styles.category}>Category: {categories[indexCategory].name}</Text>
          <Text style={styles.type}>Type: {expenseItem.type}</Text>
          {expenseItem.image ? <Image source={{ uri: expenseItem.image }} /> : null}

          <Text style={styles.address}>Address: {expenseItem.address}</Text>
        </View>
      </View>
    </View>
  );
};

export default ExpenseItemDetail;
