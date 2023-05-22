import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const CategoryCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.containerTouchable, backgroundColor: item.color }}>
        <View>
          <Text style={styles.categoryName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;
