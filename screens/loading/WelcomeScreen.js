import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import GlobalStyles from '../../config/styles';
import logo from '../../static/img/logos/logo-full.png';
import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_Regular: require('../../static/fonts/Inter-Regular.ttf'),
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Logged');
    }, 2500);
  }, [fontsLoaded]);

  return (
    <View style={style.container}>
      <Image source={logo} style={style.logo} />
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
