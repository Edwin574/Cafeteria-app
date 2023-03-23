import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import display1 from './src/screens/Display1'
import LandingPage from './src/screens/LandingPage';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import CartItems from './src/screens/CartItems';
import Profile from './src/screens/Profile';
import Deposit from './src/screens/Deposit';
import Statistics from './src/screens/Statistics';
const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='profile' screenOptions={{headerShown:false}}>
        <Stack.Screen component={display1} name='dispaly1' />
        <Stack.Screen component={LandingPage} name='welcome' />
        <Stack.Screen component={Login} name='login'/>
        <Stack.Screen component={Register} name='register' />
        <Stack.Screen component={Home} name='home'/>
        <Stack.Screen component={CartItems} name='cart'/>
        <Stack.Screen component={Profile} name='profile'/>
        <Stack.Screen component={Deposit} name='deposit'/>
        <Stack.Screen component={Statistics} name='statistics'/>
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

