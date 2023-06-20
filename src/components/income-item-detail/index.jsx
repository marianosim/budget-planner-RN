import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../constants';

const IncomeItemDetail = () => {
  const incomeItem = useSelector((state) => state.income.selected);
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{incomeItem.title}</Text>
          <Ionicons name="caret-up" size={25} color={theme.colors.incomeGreen} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.amount}>Amount: $ {incomeItem.amount}</Text>
          <Text style={styles.date}>Date: {formatDate(incomeItem.date)}</Text>
          <Text style={styles.type}>Type: {incomeItem.type}</Text>
        </View>
      </View>
    </View>
  );
};

export default IncomeItemDetail;
