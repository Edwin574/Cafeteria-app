import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import display1 from './src/screens/Display1'
import LandingPage from './src/screens/LandingPage';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import CartItems from './src/screens/CartItems';

const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='display1' screenOptions={{headerShown:false}}>
        <Stack.Screen component={display1} name='dispaly1' />
        <Stack.Screen component={LandingPage} name='welcome' />
        <Stack.Screen component={Login} name='login'/>
        <Stack.Screen component={Register} name='register' />
        <Stack.Screen component={Home} name='home'/>
        <Stack.Screen component={CartItems} name='cart'/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

