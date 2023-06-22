import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Josefin-Bold',
    fontSize: 18,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    marginRight: 10,
  },
  infoContainer: {
    marginVertical: 20,
    marginLeft: 16,
  },
  amount: {
    fontFamily: 'Josefin-Medium',
    fontSize: 16,
    paddingVertical: 8,
  },
  date: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    paddingVertical: 8,
  },
  category: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    paddingVertical: 8,
  },
  type: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    paddingVertical: 8,
  },
  address: {
    fontSize: 14,
    color: theme.colors.text,
    fontFamily: 'Josefin-Bold',
  },
});
