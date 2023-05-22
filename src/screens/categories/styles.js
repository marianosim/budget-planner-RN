import { StyleSheet, StatusBar } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Josefin-Bold',
  },
});
