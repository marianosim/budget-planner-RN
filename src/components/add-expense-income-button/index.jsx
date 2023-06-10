import { View, Text } from 'react-native';

import { styles } from './styles';

const AddExpenseIncomeButton = ({ buttonSymbol, bgColor, borderColor, textColor }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.containerTouchable,
          backgroundColor: bgColor,
          borderColor,
          color: { textColor },
        }}>
        <Text style={{ ...styles.symbol, color: textColor }}>{buttonSymbol}</Text>
      </View>
    </View>
  );
};

export default AddExpenseIncomeButton;
