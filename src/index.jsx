import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

import { Header } from "./components";
import { theme } from "./constants";
import { Home } from "./screens";
import { styles } from "./styles";

export default function App() {
  const [loaded] = useFonts({
    "Josefin-Regular": require("../assets/fonts/JosefinSans-Regular.ttf"),
    "Josefin-Medium": require("../assets/fonts/JosefinSans-Medium.ttf"),
    "Josefin-Light": require("../assets/fonts/JosefinSans-Light.ttf"),
    "Josefin-Bold": require("../assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}
