import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  cardsContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  expenseList: {},
  expenseListTitle: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    marginHorizontal: 12,
  },
});
