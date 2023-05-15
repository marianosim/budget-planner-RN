import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';
import Categories from '../categories';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        style={styles.navigationButton}
        title="Go to Categories"
        onPress={() => navigation.navigate(Categories)}
        color={theme.colors.secondary}
      />
    </View>
  );
};

export default Home;
