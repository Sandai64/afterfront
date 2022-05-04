import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import GlobalStyles from '../../config/styles';
import { OrderItem } from '../../components';

const OrdersListScreen = props => {
  const data = [
    {
      id: 150,
      table: 5,
      date: '24/04/2021',
      status: {
        id: 5,
        text: 'En attente',
      },
      ttc: 35,
    },
    {
      id: 45,
      table: 3,
      date: '24/04/2021',
      status: {
        id: 2,
        text: 'Terminée',
      },
      ttc: 10,
    },
  ];

  return (
    <View style={style.container}>
      <FlatList
        style={style.list}
        data={data}
        renderItem={({ item }) => <OrderItem {...props} item={item} />}
        keyExtractor={(item, i) => i}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    height: '100%',
  },
  list: {
    marginTop: 15,
  },
});

export default OrdersListScreen;
