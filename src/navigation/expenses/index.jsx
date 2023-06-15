import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants';
import { Detail, Expenses, Maps } from '../../screens';

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
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: 'Map' }} />
    </Stack.Navigator>
  );
};

export default ExpensesNavigator;
