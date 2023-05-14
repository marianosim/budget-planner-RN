import { View, Text } from "react-native";

import { styles } from "./styles";

const Expenses = () => {
  return (
    <View styles={styles.container}>
      <Text style={styles.title}>Expenses</Text>
    </View>
  );
};

export default Expenses;
