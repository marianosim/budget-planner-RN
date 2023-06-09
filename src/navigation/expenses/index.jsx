import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants';
import { ExpenseDetail, Expenses, Maps } from '../../screens';

const Stack = createNativeStackNavigator();

const ExpensesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Expenses"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: 'Josefin-Bold',
        },
      }}>
      <Stack.Screen name="Expenses" component={Expenses} />
      <Stack.Screen name="Expense Detail" component={ExpenseDetail} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: 'Map' }} />
    </Stack.Navigator>
  );
};

export default ExpensesNavigator;
