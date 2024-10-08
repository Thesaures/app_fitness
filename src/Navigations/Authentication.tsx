import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Starting from '../Screens/landing';
import OnePage from '../Screens/OnePage';
import TwoPage from '../Screens/twoPage';
import ThreePage from '../Screens/threePage';
import FourPage from '../Screens/fourPage';
import HomePage from '../Screens/Register/about';
import Login from '../Screens/Login/login';
const Stack = createNativeStackNavigator();
//Navigation for authentication
const AuthNavigation = () => {
  console.log('entered auth navigation')
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Starting"
        component={Starting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnePage"
        component={OnePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TwoPage"
        component={TwoPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ThreePage"
        component={ThreePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FourPage"
        component={FourPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
        
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
        
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
