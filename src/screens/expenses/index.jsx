import { SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem } from '../../components';

const Expenses = () => {
  const expenses = useSelector((state) => state.expenses.data);
  const renderItem = ({ item }) => <ExpenseItem item={item} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={expenses} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Expenses;
