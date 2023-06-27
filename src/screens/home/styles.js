import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  cardsContainer: {
    //flex: 1,
    //marginBottom: 5,
  },
  add: {
    fontFamily: 'Josefin-Bold',
    fontSize: 22,
    marginLeft: 14,
  },
  addButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  touchableContainer: {
    marginVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  buttonTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: 'Josefin-Medium',
    fontSize: 19,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 10,
  },
  inputContainer: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    minHeight: 300,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    //marginTop: 20,
  },
  expenseList: {
    flex: 1,
  },
  expenseListTitle: {
    fontFamily: 'Josefin-Regular',
    fontSize: 18,
    marginHorizontal: 14,
  },
});
