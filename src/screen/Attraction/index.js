import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {Title} from '../../components/Title';
import Share from 'react-native-share';
import {InfoCard} from '../../components/InfoCard';
import MapView, {Marker} from 'react-native-maps';

const Attraction = ({route, navigation}) => {
  const {item} = route?.params;

  const mainImage = item?.images?.length ? item?.images?.[0] : null;
  const slicedImage = item?.images?.length ? item?.images?.slice(0, 3) : [];
  const differentImage = item?.images?.length - slicedImage?.length;

  const onPress = () => {
    navigation.goBack('Home');
  };

  const GalleryPress = () => {
    navigation.navigate('Gallary', {images: item?.images});
  };

  const onShare = () => {
    Share.open({title: item?.name, message: 'Hey this is a share test'})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const coords = {
    latitude: item?.coordinates?.lat || 37.78825,
    longitude: item?.coordinates?.lon || -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          imageStyle={{borderRadius: 32}}
          style={styles.imageStyles}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable hitSlop={8} onPress={onPress}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
            <Pressable hitSlop={8} onPress={onShare}>
              <Image
                style={styles.icon}
                source={require('../../assets/share.png')}
              />
            </Pressable>
          </View>
          <Pressable onPress={GalleryPress} style={styles.footer}>
            {slicedImage.map((image, index) => (
              <View key={image}>
                <Image style={styles.minImage} source={{uri: image}} />
                {differentImage > 0 && index === slicedImage?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImage}>{`+${differentImage}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View style={{maxWidth: '70%'}}>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
          </View>
          <Title style={styles.title} text={item?.entry_price} />
        </View>
        <InfoCard
          text={item?.address}
          icon={require('../../assets/location_circle.png')}
        />
        <InfoCard
          text={`OPEN 
${item?.opening_time} - ${item?.closing_time}`}
          icon={require('../../assets/schedule.png')}
        />
        <MapView style={styles.map} initialRegion={coords}>
          <Marker coordinate={coords} title={item?.name} />
        </MapView>

        <Text
          style={styles.mapText}
          onPress={() => navigation.navigate('Map', {item: item})}>
          See the Full Map View
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Attraction;
