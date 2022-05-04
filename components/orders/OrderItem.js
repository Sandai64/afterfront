import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Svg, Line, Circle } from 'react-native-svg';
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
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#CCC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Circle cx="12" cy="12" r="10" />
          <Line x1="12" y1="16" x2="12" y2="12" />
          <Line x1="12" y1="8" x2="12.01" y2="8" />
        </Svg>
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
