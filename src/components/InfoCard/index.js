import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

export const InfoCard = ({icon, text, style}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};
