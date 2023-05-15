import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';
import Expenses from '../expenses';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View>
        <Button
          title="Go to Expenses"
          onPress={() => navigation.navigate(Expenses)}
          color={theme.colors.secondary}
        />
      </View>
    </View>
  );
};

export default Categories;
