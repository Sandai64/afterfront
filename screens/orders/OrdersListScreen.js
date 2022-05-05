import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import GlobalStyles from '../../config/styles';
import { OrderItem } from '../../components';
import OrdersAPI from "../../services/OrdersAPI";

const OrdersListScreen = props => {

  const [orders, setOrders] = useState([]);


  const fetch = async () => {
    try {
      const data = await OrdersAPI.getOrders();
      setOrders(data);
    } catch(e) {
      console.log("EEEEE", e);
    }
  }


  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        style={style.list}
        data={orders}
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
