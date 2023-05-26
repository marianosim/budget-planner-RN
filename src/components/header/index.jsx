import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Budget Planner</Text>
    </SafeAreaView>
  );
};

export default Header;
