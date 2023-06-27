import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeHeader: {
    marginTop: -80,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Josefin-Medium',
    fontSize: 25,
  },
  greeting: {
    fontFamily: 'Josefin-Regular',
    fontSize: 16,
    marginTop: 20,
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 10,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    minHeight: 340,
  },
  title: {
    fontFamily: 'Josefin-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  link: {
    paddingVertical: 5,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
  },
  linkText: {
    borderBottomColor: '#0582CA',
    //borderBottomWidth: 1,
    fontFamily: 'Josefin-Regular',
    fontSize: 14,
    color: '#0582CA',
    textAlign: 'center',
  },
  submitContainer: {
    paddingVertical: 5,
  },
});
