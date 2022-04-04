import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultScreen } from "../screens";

const Tab = createBottomTabNavigator();

const MainTabNavigation = ({navigation}) => {


  return (
    <Tab.Navigator
      initialRouteName={"Default"}
    >
      <Tab.Screen name={"Default"} component={DefaultScreen}/>
    </Tab.Navigator>
  )
}

export default MainTabNavigation;
