import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigation } from './navigations';

export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNavigation />
    </NavigationContainer>
  );
}
