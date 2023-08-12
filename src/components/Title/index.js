import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

export const Title = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};
