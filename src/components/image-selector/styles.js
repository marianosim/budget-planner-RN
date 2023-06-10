import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHeader: {
    fontFamily: 'Josefin-Bold',
    fontSize: 16,
    paddingBottom: 15,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
