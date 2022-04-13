import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import GlobalStyles from '../../config/styles';

const OrdersScreen = () => {
  return (
    <View style={style.container}>
      <Text>OrdersScreen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    height: '100%',
  },
});

export default OrdersScreen;
