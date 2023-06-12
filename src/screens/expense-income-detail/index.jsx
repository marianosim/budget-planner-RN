import { useState } from 'react';
import { ScrollView, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ImageSelector, ItemDetail, LocationSelector } from '../../components';
import { addExpenseImageLocation } from '../../store/actions';

const Detail = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [location, setLocation] = useState(null);
  const item = useSelector((state) => state.expenses.selected);
  const { id, title, amount, category, type } = item;

  const onImage = (imageUri) => {
    setImage(imageUri);
  };

  const onLocation = (location) => {
    setLocation(location);
  };

  const onHandleAddImage = () => {
    dispatch(
      addExpenseImageLocation({
        id,
        title,
        amount,
        category,
        type,
        image,
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ItemDetail />
      {item.image ? (
        <Image style={styles.image} source={{ uri: item.image }} />
      ) : (
        <ImageSelector onImage={onImage} />
      )}
      <LocationSelector onLocation={onLocation} />
      <Button title="Save Changes" onPress={onHandleAddImage} />
    </ScrollView>
  );
};

export default Detail;
