import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({categories, selectedCategory, onPressCategory}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={categories}
      renderItem={({item}) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onPressCategory(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Categories;
