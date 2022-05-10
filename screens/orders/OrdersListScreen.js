import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import GlobalStyles from '../../config/styles';
import { Loader, OrderItem } from '../../components';
import API from '../../services';

const OrdersListScreen = props => {
  const isFocused = useIsFocused();

  const [update, setUpdate] = useState(false);
  const [states, setStates] = useState([]);

  // Memory leak ????
  // C'est le seul useState qui le fait alors que state est chargé en même temps
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.Orders.getStatuts();
        setStates(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (isFocused) {
      (async () => {
        try {
          const data = await API.Orders.getOrders();
          setOrders(data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [isFocused, update]);

  useEffect(() => {
    setInterval(() => {
      setUpdate(!update);
    }, 1000*5)
  }, []);

  return (
    (orders.length && (
      <View style={style.container}>
        <FlatList
          style={style.list}
          data={orders}
          renderItem={({ item }) => (
            <OrderItem {...props} item={item} states={states} />
          )}
          keyExtractor={(item, i) => i}
        />
      </View>
    )) || <Loader />
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
