import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants';
import { IncomeDetail, Incomes } from '../../screens';

const Stack = createNativeStackNavigator();

const IncomesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Incomes"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: 'Josefin-Bold',
        },
      }}>
      <Stack.Screen name="Incomes" component={Incomes} />
      <Stack.Screen name="Income Detail" component={IncomeDetail} />
    </Stack.Navigator>
  );
};

export default IncomesNavigator;
