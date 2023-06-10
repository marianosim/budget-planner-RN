import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 13,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Josefin-Regular',
    color: theme.colors.text,
    //paddingVertical: 5,
  },
  errorContainer: {
    flex: 1,
    paddingVertical: 5,
  },
  errorMessage: {
    fontSize: 12,
    fontFamily: 'Josefin-Regular',
    paddingVertical: 5,
    color: theme.colors.brightRed,
  },
});
