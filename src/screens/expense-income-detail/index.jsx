import { useState } from 'react';
import { ScrollView, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ImageSelector, ItemDetail, LocationSelector } from '../../components';
import { addExpenseImageLocation } from '../../store/actions';

const Detail = () => {
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState('');
  const [newCoords, setNewCoords] = useState(null);
  const item = useSelector((state) => state.expenses.selected);
  const { id, title, amount, category, type, date, image, address, coords } = item;

  const enableButton = image && coords;

  const onImage = (imageUri) => {
    setNewImage(imageUri);
    console.warn('image:', imageUri);
  };

  const onLocation = (location) => {
    setNewCoords(location);
    console.warn('coords: ', location);
  };

  const onHandleAddImageLocation = () => {
    dispatch(
      addExpenseImageLocation({
        id,
        date,
        title,
        amount,
        category,
        type,
        image: newImage,
        coords: newCoords,
      })
    );
    console.log(item);
  };

  return (
    <ScrollView style={styles.container}>
      <ItemDetail />
      {item.image ? (
        <Image style={styles.image} source={{ uri: item.image }} />
      ) : (
        <ImageSelector onImage={onImage} />
      )}
      {item.address === '' ? <LocationSelector onLocation={onLocation} /> : null}
      {!image && !address ? (
        <Button disabled={!enableButton} title="Save Changes" onPress={onHandleAddImageLocation} />
      ) : null}
    </ScrollView>
  );
};

export default Detail;
