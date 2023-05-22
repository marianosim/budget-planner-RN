import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants';
import { Expenses } from '../../screens';

const Stack = createNativeStackNavigator();

const ExpensesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Expenses"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.terciary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: 'Josefin-Bold',
        },
      }}>
      <Stack.Screen name="Expenses" component={Expenses} />
    </Stack.Navigator>
  );
};

export default ExpensesNavigator;
