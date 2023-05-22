import { FlatList, SafeAreaView } from 'react-native';

import { styles } from './styles';
import { CategoryCard } from '../../components';
import { CATEGORIES } from '../../constants';

const Categories = ({ navigation }) => {
  const renderItem = ({ item }) => <CategoryCard item={item} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Categories;
