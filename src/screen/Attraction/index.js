import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {Title} from '../../components/Title';
import {InfoCard} from '../../components/InfoCard';

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

  return (
    <SafeAreaView style={styles.container}>
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
          <Pressable hitSlop={8}>
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
        <View style={styles.textContainer}>
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
    </SafeAreaView>
  );
};

export default Attraction;
