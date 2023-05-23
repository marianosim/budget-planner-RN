import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  containerTouchable: {
    flex: 0.5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  categoryName: {
    fontSize: 17,
    fontFamily: 'Josefin-Regular',
    color: theme.colors.text,
    textAlign: 'center',
  },
});
