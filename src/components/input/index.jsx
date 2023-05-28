import { TextInput, View, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Add new expense here" style={styles.input} value="" />
      <Button title="Add" color={theme.colors.secondary} onPress={() => {}} />
    </View>
  );
};

export default Input;
