import { ScrollView } from 'react-native';

import { styles } from './styles';
import { IncomeItemDetail } from '../../components';

const IncomeDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <IncomeItemDetail />
    </ScrollView>
  );
};

export default IncomeDetail;
