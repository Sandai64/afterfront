import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import GlobalStyles from '../../config/styles';

const OrderItem = ({ item }) => {
  return (
    <TouchableOpacity style={style.item}>
      <View style={style.top}>
        <View>
          <Text style={style.text}>Table {item.table}</Text>
          <Text style={style.text}>{item.date}</Text>
        </View>
        <Text style={style.id}>#{item.id}</Text>
      </View>
      <View style={style.bottom}>
        <Text style={style.text}>Status : {item.status.text}</Text>
        <Text style={style.id}>Voir plus...</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  item: {
    backgroundColor: GlobalStyles.color.secondary,
    padding: '2%',
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  top: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 12,
  },
  text: {
    color: GlobalStyles.color.primary,
  },
  id: {
    color: '#BBB',
  },
});

export default OrderItem;
