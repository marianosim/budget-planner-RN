import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
//import { totalIncome } from '../../store/actions';
//import { totalExpenses } from '../../store/actions';

const InfoCards = ({ expenseTotal, incomesTotal, balanceTotal }) => {
  // const dispatch = useDispatch();
  // const incomes = useSelector((state) => state?.income?.data);
  // const incomesTotal = useSelector((state) => state?.income?.totalIncome);
  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(totalExpenses(expenses.amount));
  //   }, [])
  // );
  // useEffect(() => {
  //   dispatch(totalIncome(incomes));
  // }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.cardContainer, backgroundColor: '#FAC7D0' }}>
        <Text style={styles.cardTitle}>Expenses:</Text>
        <Text style={styles.cardTotal}>${expenseTotal}</Text>
      </View>
      <View style={{ ...styles.cardContainer, backgroundColor: '#9AD3FE' }}>
        <Text style={styles.cardTitle}>Balance:</Text>
        <Text style={styles.cardTotal}>$ {balanceTotal}</Text>
      </View>
      <View style={{ ...styles.cardContainer, backgroundColor: '#C5E8E6' }}>
        <Text style={styles.cardTitle}>Income:</Text>
        <Text style={styles.cardTotal}>${incomesTotal}</Text>
      </View>
    </View>
  );
};

export default InfoCards;
