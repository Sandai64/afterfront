import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../config/styles';

const ProductItem = ({ item }) => {
  return (
    <View style={style.container}>
      <Text>xN nom</Text>
      <Text>prix EUR TTC</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    padding: 18,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default ProductItem;
