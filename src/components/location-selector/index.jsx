import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';
import MapPreview from '../map-preview';

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permisos insufucuentes', 'Necesitamos permisos para acceder a la ubicación', [
        { text: 'Ok' },
      ]);
      return false;
    }
    return true;
  };

  const onHandlerGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;
    const location = await getCurrentPositionAsync({
      timeout: 5000,
    });
    const { latitude, longitude } = location.coords;
    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };
  return (
    <View style={styles.container}>
      <MapPreview style={styles.preview} location={pickedLocation}>
        <Text>No hay ubicación seleccionada</Text>
      </MapPreview>
      <Button
        title="Get location"
        onPress={() => onHandlerGetLocation()}
        color={theme.colors.primary}
      />
      <Button title="Elegir del mapa" onPress={() => null} color={theme.colors.primary} />
    </View>
  );
};

export default LocationSelector;
