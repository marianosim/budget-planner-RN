import { requestCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker';
import { useState } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../constants';
import { addExpenseImage } from '../../store/actions';

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);
  const selectedExpense = useSelector((state) => state.expenses.selected);
  const { id, title, amount, category, type } = selectedExpense;
  const dispatch = useDispatch();

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need permission to use the camera', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  const onHandleAddImage = () => {
    dispatch(
      addExpenseImage({
        id,
        title,
        amount,
        category,
        type,
        image: pickedUrl,
      })
    );
    console.log(id, pickedUrl);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.imageHeader}>Add a picture: (eg: of a receipt )</Text>
      </View>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No image selected</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Take photo" color={theme.colors.primary} onPress={onHandleTakeImage} />
      <Button title="Save image" onPress={onHandleAddImage} />
    </View>
  );
};

export default ImageSelector;
