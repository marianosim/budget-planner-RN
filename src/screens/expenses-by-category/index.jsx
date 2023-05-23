import { SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';
import { ExpenseItem } from '../../components';
import { EXPENSES } from '../../constants';

const ExpensesByCategory = ({ route }) => {
  const { categoryId } = route.params;

  const filteredExpenses = EXPENSES.filter((expense) => expense.category === categoryId);

  const renderItem = ({ item }) => <ExpenseItem item={item} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredExpenses} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default ExpensesByCategory;
