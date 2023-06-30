import { View, Text } from 'react-native';

import { styles } from './styles';

const InfoCards = ({ expenseTotal, incomesTotal, balanceTotal }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.cardContainer, backgroundColor: '#FAC7D0' }}>
        <Text style={styles.cardTitle}>Expenses:</Text>
        <Text style={styles.cardTotal}>-${expenseTotal?.toLocaleString('ES-AR')}</Text>
      </View>
      <View style={{ ...styles.cardContainer, backgroundColor: '#9AD3FE' }}>
        <Text style={styles.cardTitle}>Balance:</Text>
        <Text style={styles.cardTotal}>${balanceTotal?.toLocaleString('ES-AR')}</Text>
      </View>
      <View style={{ ...styles.cardContainer, backgroundColor: '#C5E8E6' }}>
        <Text style={styles.cardTitle}>Income:</Text>
        <Text style={styles.cardTotal}>${incomesTotal?.toLocaleString('ES-AR')}</Text>
      </View>
    </View>
  );
};

export default InfoCards;
