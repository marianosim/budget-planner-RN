import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem } from '../../components';
import { selectExpense } from '../../store/actions';

const Incomes = ({ navigation }) => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.income.data);
  const renderItem = ({ item }) => <ExpenseItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item?.id?.toString();
  const onSelected = (item) => {
    dispatch(selectExpense(item.id));
    navigation.navigate('Income Detail', {
      //expenseId: item.id,
      //color: item.color,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={incomes.sort((a, b) => b.date - a.date)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Incomes;
