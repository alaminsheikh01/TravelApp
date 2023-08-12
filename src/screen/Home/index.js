import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Title} from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard.js';
import JsonData from '../../data/attraction.json';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JsonData);
  }, []);

  console.log(data);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Title text={'Where do'} style={{fontWeight: 'normal'}} />
        <Title text={'You want to go'} />

        <Title text={'Explore Attraction'} style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          onPressCategory={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Famous',
            'Hot',
            'Historical',
            'Trending',
            'Demo',
            'Another',
          ]}
        />
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.row}>
          {[...data, ...data]?.map((item, index) => {
            return (
              <AttractionCard
                key={item?.id}
                style={index % 2 === 0 ? {marginRight: 10} : {}}
                title={item?.name}
                subtitle={item?.city}
                image={item?.images?.length ? item?.images[0] : null}
              />
            );
          })}
        </ScrollView> */}

        <FlatList
          data={data}
          keyExtractor={item => String(item?.id)}
          renderItem={({item, index}) => (
            <AttractionCard
              key={item?.id}
              style={index % 2 === 0 ? {marginRight: 10} : {}}
              title={item?.name}
              subtitle={item?.city}
              image={item?.images?.length ? item?.images[0] : null}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
