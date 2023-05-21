import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../../constants';
import CategoriesNavigator from '../categories';
import ExpensesNavigator from '../expenses';
import HomeNavigator from '../home';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Josefin-Regular',
          fontSize: 14,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
        },
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="CategoriesTab"
        component={CategoriesNavigator}
        options={{
          tabBarLabel: 'Categories',
        }}
      />
      <BottomTab.Screen
        name="ExpensesTab"
        component={ExpensesNavigator}
        options={{
          tabBarLabel: 'Expenses',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
