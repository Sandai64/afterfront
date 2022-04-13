import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserScreen } from '../screens';
import GlobalStyles from '../config/styles';
import OrdersStackNavigation from './OrdersStackNavigation';

const Tab = createBottomTabNavigator();

const MainTabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={'Orders'}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: GlobalStyles.color.secondary,
        },
        headerStyle: {
          backgroundColor: GlobalStyles.color.primary,
        },
        headerTitleStyle: GlobalStyles.headerTitleStyle,
        headerShadowVisible: false,
        tabBarActiveTintColor: GlobalStyles.color.primary,
      }}
    >
      <Tab.Screen
        name={'Orders'}
        options={{ title: 'Commandes', headerShown: false }}
        component={OrdersStackNavigation}
      />
      <Tab.Screen
        name={'User'}
        options={{ title: 'Mon compte' }}
        component={UserScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
