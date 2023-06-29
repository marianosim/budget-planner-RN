import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants';
import { Categories, ExpensesByCategory } from '../../screens';

const Stack = createNativeStackNavigator();

const CategoriesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontFamily: 'Josefin-Bold',
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="ExpensesByCategory"
        component={ExpensesByCategory}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoriesNavigator;
