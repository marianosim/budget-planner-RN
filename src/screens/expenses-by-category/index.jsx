import { SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem } from '../../components';
import { EXPENSES } from '../../constants';

const ExpensesByCategory = () => {
  const category = useSelector((state) => state.categories.selected);

  const filteredExpenses = EXPENSES.filter((expense) => expense.category === category.id);

  const renderItem = ({ item }) => <ExpenseItem item={item} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredExpenses} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default ExpensesByCategory;
