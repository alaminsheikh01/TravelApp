import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';

const Map = ({route}) => {
  const navigation = useNavigation();
  const {item} = route?.params;

  const coords = {
    latitude: item?.coordinates?.lat || 37.78825,
    longitude: item?.coordinates?.lon || -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  return (
    <View style={styles.container}>
      <MapView initialRegion={coords} style={styles.map}>
        <Marker coordinate={coords} title={item?.city} />
      </MapView>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack('Attraction')}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.back}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{`${item?.name} - ${item?.city}`}</Text>
      </View>
    </View>
  );
};

export default Map;
