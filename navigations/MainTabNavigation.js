import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserScreen } from '../screens';
import GlobalStyles from '../config/styles';
import OrdersStackNavigation from './OrdersStackNavigation';
import { AccountIcon, OrderIcon } from '../static/img/icons';

const Tab = createBottomTabNavigator();

const MainTabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={'Orders'}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: GlobalStyles.color.secondary,
        },
        tabBarLabelStyle: {
          fontFamily: GlobalStyles.fontFamily.interRegular,
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
        options={{
          title: 'Commandes',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <OrderIcon color={focused ? GlobalStyles.color.primary : color} />
            );
          },
        }}
        component={OrdersStackNavigation}
      />
      <Tab.Screen
        name={'User'}
        options={{
          title: 'Mon compte',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <AccountIcon
                color={focused ? GlobalStyles.color.primary : color}
              />
            );
          },
        }}
        component={UserScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
