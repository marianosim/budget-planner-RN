import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem } from '../../components';
import { selectExpense } from '../../store/actions';

const Expenses = ({ navigation }) => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.data);
  const renderItem = ({ item }) => <ExpenseItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  const onSelected = (item) => {
    dispatch(selectExpense(item.id));
    navigation.navigate('Detail', {
      name: item.name,
      color: item.color,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={expenses} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Expenses;
