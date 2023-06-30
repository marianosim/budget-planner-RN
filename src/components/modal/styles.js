import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Josefin-Regular',
  },
  modalTitle: {
    fontFamily: 'Josefin-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    marginBottom: 20,
  },
  modalDetailMessage: {
    fontFamily: 'Josefin-Regular',
    fontSize: 18,
    color: theme.colors.text,
  },
  selectedItem: {
    fontFamily: 'Josefin-Bold',
    fontSize: 18,
    borderTopWidth: 1,
    borderTopColor: theme.colors.secondary,
    color: theme.colors.text,
    paddingVertical: 10,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 2,
  },
  selectedItemAmount: {
    fontFamily: 'Josefin-Medium',
    textAlign: 'center',
    marginBottom: 15,
  },
  selectedItemDate: {
    fontFamily: 'Josefin-Medium',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    fontFamily: 'Josefin-Regular',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
