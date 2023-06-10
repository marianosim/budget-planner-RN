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
  addButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableContainer: {
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  buttonTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: 'Josefin-Bold',
    fontSize: 16,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  inputContainer: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 10,
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
  expenseList: {},
  expenseListTitle: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    marginHorizontal: 12,
  },
});
