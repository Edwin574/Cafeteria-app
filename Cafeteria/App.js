import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import display1 from './src/screens/Display1'
import LandingPage from './src/screens/LandingPage';

const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='display1'>
        <Stack.Screen component={display1} name='dispaly1' />
        <Stack.Screen component={LandingPage} name='welcome'/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

