import React from 'react';
import 'react-native-gesture-handler';
import {Home} from './src/screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
  );
};

export default App;
