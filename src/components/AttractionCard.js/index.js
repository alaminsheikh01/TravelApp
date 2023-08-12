import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const AttractionCard = ({image, title, subtitle, style}) => {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.imgIcon}
          source={{
            uri: 'https://www.iconpacks.net/icons/2/free-location-icon-2950-thumb.png',
          }}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default AttractionCard;
