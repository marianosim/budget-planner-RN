import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  cardsContainer: {
    flex: 1,
    marginBottom: 10,
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    maxWidth: 400,
    paddingVertical: 30,
    padding: 15,
    margin: 15,
    marginVertical: 80,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //minHeight: 120,
  },
  dropdownContainer: {
    flex: 1,
    fontFamily: 'Josefin-Regular',
  },
  dropdownInput: {
    fontFamily: 'Josefin-Regular',
    fontSize: 13,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    paddingVertical: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  expenseList: {},
  expenseListTitle: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    marginHorizontal: 12,
  },
});
