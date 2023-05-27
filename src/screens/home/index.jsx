import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ExpenseItem, InfoCards } from '../../components';

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => <ExpenseItem item={item} />;
  const keyExtractor = (item) => item.id.toString();
  const expenses = useSelector((state) => state.expenses.data);

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <InfoCards />
      </View>
      <View style={styles.inputContainer}>
        <Text>Input</Text>
      </View>
      <View style={styles.expenseList}>
        <FlatList data={expenses} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
    </View>
  );
};

export default Home;
