import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import GlobalStyles from '../../config/styles';
import { MoreIcon } from '../../static/img/icons';
import dayjs from 'dayjs';

const OrderItem = ({ navigation, item, states }) => {
  return (
    <TouchableOpacity
      style={style.item}
      onPress={() => {
        navigation.navigate('Detail', { item, states });
      }}
    >
      <View style={style.top}>
        <View>
          <Text style={style.text}>Table {item.idTable}</Text>
          <Text style={style.text}>{dayjs(item.date).format('HH:mm:ss')}</Text>
          <Text style={style.text}>
            {dayjs(item.date).format('DD/MM/YYYY')}
          </Text>
        </View>
        <Text style={style.id}>#{item.idCommande}</Text>
      </View>
      <View style={style.bottom}>
        <Text style={style.text}>Status : {item.idStatut.nom}</Text>
        <MoreIcon color={GlobalStyles.color.primary} />
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
    fontFamily: GlobalStyles.fontFamily.interRegular,
  },
  id: {
    color: '#BBB',
  },
});

export default OrderItem;
