import { useState } from 'react';
import { ScrollView, Image, Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ImageSelector, ItemDetail, LocationSelector, MapPreview } from '../../components';
import { theme } from '../../constants';
import { addExpenseImageLocation } from '../../store/actions';

const ExpenseDetail = () => {
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState('');
  const [newCoords, setNewCoords] = useState(null);
  const item = useSelector((state) => state.expenses.selected);
  const { id, title, amount, category, type, date, image, address, coords } = item;

  const enableButton = newImage && newCoords;

  const onImage = (imageUri) => {
    setNewImage(imageUri);
  };

  const onLocation = (location) => {
    setNewCoords(location);
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
  };

  const parseCoords = JSON.parse(item.coords);

  return (
    <ScrollView style={styles.container}>
      <ItemDetail />
      {item.image ? (
        <Image style={styles.image} source={{ uri: item.image }} />
      ) : (
        <ImageSelector onImage={onImage} />
      )}
      {item.address === '' ? (
        <LocationSelector onLocation={onLocation} />
      ) : (
        <MapPreview style={styles.map} location={{ lat: parseCoords.lat, lng: parseCoords.lng }}>
          <Text>Location unavailable</Text>
        </MapPreview>
      )}
      <View style={styles.saveChangesButton}>
        <Button
          disabled={!enableButton}
          title="Save Changes"
          onPress={onHandleAddImageLocation}
          color={theme.colors.incomeGreen}
        />
      </View>
    </ScrollView>
  );
};

export default ExpenseDetail;
