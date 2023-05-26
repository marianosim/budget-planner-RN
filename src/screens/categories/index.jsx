import { FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CategoryCard } from '../../components';

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.data);
  const onSelected = (item) => {
    navigation.navigate('ExpensesByCategory', {
      categoryId: item.id,
      name: item.name,
      color: item.color,
    });
  };

  const renderItem = ({ item }) => <CategoryCard item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Categories;
