import { useState } from 'react';
import { ScrollView, Image, Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { IncomeItemDetail } from '../../components';
import { theme } from '../../constants';

const IncomeDetail = () => {
  //const item = useSelector((state) => state.income.selected);
  //const { id, title, amount, category, type, date, image, address, coords } = item;

  return (
    <ScrollView style={styles.container}>
      <IncomeItemDetail />
    </ScrollView>
  );
};

export default IncomeDetail;
