import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigation from '../navigations/MainTabNavigation';
import { LoginScreen, WelcomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const LoginStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Logged'} component={MainTabNavigation} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigation;
