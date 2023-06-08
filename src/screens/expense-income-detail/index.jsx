import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ItemDetail } from '../../components';

const Detail = () => {
  return (
    <View style={styles.container}>
      <ItemDetail />
    </View>
  );
};

export default Detail;
