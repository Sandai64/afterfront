import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalStyles from '../../config/styles';

const OrderDetailScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.head}>
        <View style={style.info}>
          <Text>#4854</Text>
          <Text>Table 12</Text>
          <Text>TTC 89 EUR</Text>
        </View>
        <View style={style.switch}>
          <Text>Switch view</Text>
        </View>
      </View>

      <View style={style.body}>
        <Text>Body View</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    height: '100%',
  },
  head: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    alignItems: 'center',
  },
  info: {},
  switch: {},
  body: {
    marginTop: 25,
    marginHorizontal: 25,
    backgroundColor: GlobalStyles.color.secondary,
    borderRadius: 8,
    minHeight: "75%"
  },
});

export default OrderDetailScreen;
