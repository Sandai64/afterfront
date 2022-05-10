import React, { useEffect, useRef } from 'react';
import { StyleSheet, Image, View, Animated } from 'react-native';

import GlobalStyles from '../../config/styles';
import logo from '../../static/img/logos/logo-full.png';
import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
  const wait = 2200;
  const duration = 250;

  let [fontsLoaded] = useFonts({
    Inter_Regular: require('../../static/fonts/Inter-Regular.ttf'),
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Logged');
    }, wait + 10);
  }, [fontsLoaded]);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }).start();
      }, wait - duration);
    }
  }, [fadeAnim, fontsLoaded]);

  return (
    <View style={style.container}>
      <Animated.Image
        source={logo}
        style={{ width: '45%', height: '45%', opacity: fadeAnim }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.color.primary,
  },
  logo: {
    width: '45%',
    height: '45%',
  },
});

export default WelcomeScreen;
