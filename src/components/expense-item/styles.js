import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 90,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: theme.colors.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  name: {
    fontFamily: 'Josefin-Medium',
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  amount: {
    fontFamily: 'Josefin-Bold',
    fontSize: 17,
    color: theme.colors.white,
  },
  date: {
    fontFamily: 'Josefin-Regular',
    marginTop: 5,
  },
  amountBadge: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  deleteButton: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
});
