import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';
import Expenses from '../expenses';

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
