import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import GlobalStyles from '../../config/styles';
import MoreIcon from './MoreIcon';

const OrderItem = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      style={style.item}
      onPress={() => {
        navigation.navigate('Detail');
      }}
    >
      <View style={style.top}>
        <View>
          <Text style={style.text}>Table {item.idTable}</Text>
          <Text style={style.text}>{item.date}</Text>
        </View>
        <Text style={style.id}>#{item.idCommande}</Text>
      </View>
      <View style={style.bottom}>
        <Text style={style.text}>Status : {item.idStatut.nom}</Text>
        <MoreIcon />
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
    borderRadius: 8,
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
