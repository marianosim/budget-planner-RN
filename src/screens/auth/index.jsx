/* eslint-disable no-case-declarations */
import { useReducer, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { Input } from '../../components';
import { theme } from '../../constants';
import { signUp, signIn } from '../../store/actions';
import { UPDATE_FORM, onInputChange } from '../../utils/auth-form';

const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? 'Login' : 'Register';
  const buttonTitle = isLogin ? 'Login' : 'Register';
  const messageText = isLogin ? "Don't have an account?" : 'Already have an account?';
  const greeting = isLogin ? 'Please log in to continue:' : 'Please register to get started:';
  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };
  const onHandleAuth = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : signUp({ email: formState.email.value, password: formState.password.value })
    );
  };
  const onHandleInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };
  return (
    <View style={styles.container}>
      <View style={styles.welcomeHeader}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.greeting}>{greeting}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="email@gmail.com"
          placeholderTextColor={theme.colors.darkGray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleInputChange({ value: text, name: 'email' })}
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          hasError={formState.email.hasError}
          touched={formState.email.touched}
        />

        <Input
          placeholder="********"
          placeholderTextColor={theme.colors.darkGray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleInputChange({ value: text, name: 'password' })}
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          hasError={formState.password.hasError}
          touched={formState.password.touched}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            color={theme.colors.primary}
            onPress={onHandleAuth}
          />
        </View>
      </View>
    </View>
  );
};

export default Auth;
