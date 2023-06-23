import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardContainer: {
    flex: 1,
    height: 80,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.terciary,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardTitle: {
    fontFamily: 'Josefin-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
  cardTotal: {
    fontFamily: 'Josefin-Bold',
    fontSize: 16,
  },
});
