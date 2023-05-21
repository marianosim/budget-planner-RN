import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants';
import { Home } from '../../screens';

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
    </Stack.Navigator>
  );
};

export default HomeNavigator;
