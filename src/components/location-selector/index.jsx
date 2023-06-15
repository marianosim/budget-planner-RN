import { useNavigation, useRoute } from '@react-navigation/native';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';
import MapPreview from '../map-preview';

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const { mapLocation } = route.params || {};
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

  const onHandlerGetLocation = async (isMaps = false) => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;
    const location = await getCurrentPositionAsync({
      timeout: 5000,
    });
    const { latitude, longitude } = location.coords;
    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
    if (isMaps) navigation.navigate('Maps', { coords: { lat: latitude, lng: longitude } });
  };

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  return (
    <View style={styles.container}>
      <MapPreview style={styles.preview} location={pickedLocation}>
        <Text>No hay ubicación seleccionada</Text>
      </MapPreview>
      <View style={styles.actionButtons}>
        <Button
          title="Get location"
          onPress={() => onHandlerGetLocation()}
          color={theme.colors.primary}
        />
      </View>
      <View style={styles.actionButtons}>
        <Button
          title="Select from map"
          onPress={() => onHandlerGetLocation(true)}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
};

export default LocationSelector;
