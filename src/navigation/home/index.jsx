import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants';
import { ExpenseDetail, Expenses, Home, IncomeDetail, Maps } from '../../screens';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: 'Josefin-Bold',
        },
      }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Expense Detail" component={ExpenseDetail} />
      <Stack.Screen name="Income Detail" component={IncomeDetail} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: 'Map' }} />
      <Stack.Screen name="Expenses" component={Expenses} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
