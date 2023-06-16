import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: theme.colors.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  name: {
    fontFamily: 'Josefin-Medium',
    fontSize: 17,
  },
  amount: {
    fontFamily: 'Josefin-Bold',
    fontSize: 17,
    color: theme.colors.white,
  },
  date: {
    fontFamily: 'Josefin-Regular',
  },
  amountBadge: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
});
