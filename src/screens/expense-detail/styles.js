import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    marginBottom: 20,
  },
  map: {
    height: 220,
  },
  saveChangesButton: {
    marginVertical: 20,
  },
});
