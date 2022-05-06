import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import GlobalStyles from '../../config/styles';

const Loader = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color={GlobalStyles.color.secondary} animating={true} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: GlobalStyles.color.primary
  },
});

export default Loader;