import React from 'react';
import {SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Gallary = ({route}) => {
  const navigation = useNavigation();
  const {images} = route?.params;
  console.log('images', images);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />

      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack('Attraction')}>
        <Image
          style={styles.backIcon}
          source={require('../../assets/back.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Gallary;
