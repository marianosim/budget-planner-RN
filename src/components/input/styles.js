import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    // marginVertical: 10,
    // justifyContent: 'center',
    // height: 100,
  },
  input: {
    fontFamily: 'Josefin-Regular',
    fontSize: 13,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    paddingVertical: 5,
  },
  errorContainer: {
    flex: 1,
    paddingVertical: 5,
  },
  errorMessage: {
    fontFamily: 'Josefin-Regular',
    fontSize: 30,
    paddingVertical: 5,
    color: theme.colors.brightRed,
  },
});
