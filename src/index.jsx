import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';

import { Header } from './components';
import { theme } from './constants';
import AppNavigator from './navigation';
import store from './store/index';
import { styles } from './styles';

export default function App() {
  const [loaded] = useFonts({
    'Josefin-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'Josefin-Medium': require('../assets/fonts/JosefinSans-Medium.ttf'),
    'Josefin-Light': require('../assets/fonts/JosefinSans-Light.ttf'),
    'Josefin-Bold': require('../assets/fonts/JosefinSans-Bold.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <AppNavigator />
      </View>
    </Provider>
  );
}
