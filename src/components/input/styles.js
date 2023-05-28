import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  input: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    color: theme.colors.text,
  },
});
