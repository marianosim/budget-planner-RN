import { View, Text } from 'react-native';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Categories</Text>
      </View>
    </View>
  );
};

export default Categories;
