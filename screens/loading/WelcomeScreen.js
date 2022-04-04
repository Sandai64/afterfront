import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import GlobalStyles from '../../config/styles';
import logo from '../../static/img/logos/logo-full.png';

const WelcomeScreen = ({ navigation }) => {

  useEffect(() => {
    //setTimeout(navigation.replace('Login'), 1000);
    setTimeout(() => {
      navigation.replace('Login');
    }, 2500);
  }, []);


  return (
    <View style={style.container}>
      <Image
        source={logo}
        style={style.logo}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.color.primary
  },
  logo: {
    width: "45%",
    height: "45%",
  },
});

export default WelcomeScreen;
