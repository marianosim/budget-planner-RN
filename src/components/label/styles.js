import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 40,
  },
  label: {
    fontFamily: 'Josefin-Regular',
    fontSize: 14,
    paddingVertical: 5,
    color: theme.colors.text,
  },
  subLabel: {
    fontFamily: 'Josefin-Regular',
    fontSize: 12,
    paddingVertical: 5,
    color: theme.colors.text,
  },
});
