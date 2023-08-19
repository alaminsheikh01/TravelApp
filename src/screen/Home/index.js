import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Title} from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard.js';
import JsonData from '../../data/attraction.json';
import categories from '../../data/categories.json';
import {useNavigation} from '@react-navigation/native';

const All = 'All';

export const Home = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(All);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === All) {
      setData(JsonData);
    } else {
      const filterData = JsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(filterData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        ListEmptyComponent={<Text>No Data Found</Text>}
        ListHeaderComponent={
          <View>
            <Title text={'Where do'} style={{fontWeight: 'normal'}} />
            <Title text={'You want to go'} />

            <Title text={'Explore Attraction'} style={styles.subtitle} />

            <Categories
              selectedCategory={selectedCategory}
              onPressCategory={setSelectedCategory}
              categories={[All, ...categories]}
            />
          </View>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item?.id}
            style={index % 2 === 0 ? {marginRight: 12} : {}}
            title={item?.name}
            subtitle={item?.city}
            image={item?.images?.length ? item?.images[0] : null}
            onPress={() => navigation.navigate('Attraction', {item: item})}
          />
        )}
      />
    </SafeAreaView>
  );
};
