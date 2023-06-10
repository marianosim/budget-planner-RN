import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '18%',
  },
  containerTouchable: {
    borderWidth: 5,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  symbol: {
    //fontFamily: 'Josefin-Regular',
    fontSize: 35,
    textAlign: 'center',
    //color: theme.colors.incomeGreen,
  },
});
