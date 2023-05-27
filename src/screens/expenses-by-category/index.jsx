import { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem } from '../../components';
//import { EXPENSES } from '../../constants';
import { filterExpenses } from '../../store/actions';

const ExpensesByCategory = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const filteredExpenses = useSelector((state) => state.expenses.filteredExpenses);

  useEffect(() => {
    dispatch(filterExpenses(category.id));
  }, []);

  // const filteredExpenses = EXPENSES.filter((expense) => expense.category === category.id);

  const renderItem = ({ item }) => <ExpenseItem item={item} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredExpenses} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default ExpensesByCategory;
