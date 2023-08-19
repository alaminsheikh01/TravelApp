import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Attraction from './src/screen/Attraction';
import Gallary from './src/screen/Gallary';
import {Home} from './src/screen/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Attraction" component={Attraction} />
        <Stack.Screen name="Gallary" component={Gallary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
