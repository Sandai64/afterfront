import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useIsFocused } from '@react-navigation/native';
import GlobalStyles from '../../config/styles';
import { Loader, OrderItem } from '../../components';
import API from '../../services';

const OrdersListScreen = props => {
  const isFocused = useIsFocused();

  const [update, setUpdate] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedValue, setSelectedValue] = useState(10);

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

    setSelectedValue(states.length + 1);
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
    }, 1000 * 5);
  }, []);

  const _orders = orders.filter(
    value =>
      selectedValue == states.length + 1 ||
      value.idStatut.idStatut == selectedValue,
  );

  return (
    (orders.length && states.length && (
      <View style={style.container}>
        <View style={style.head}>
          <View style={style.switch}>
            <Text style={style.title}>Filtre :</Text>
            <Picker
              selectedValue={selectedValue}
              mode="dropdown"
              style={{
                height: 50,
                width: 150,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item
                label={'Aucun filtre'}
                value={states.length + 1}
                style={style.picker}
              />
              {states.map((value, i) => (
                <Picker.Item
                  label={value.nom}
                  key={i}
                  value={value.idStatut}
                  style={style.picker}
                />
              ))}
            </Picker>
          </View>
        </View>
        <FlatList
          style={style.list}
          data={_orders}
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
  head: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: GlobalStyles.fontFamily.interRegular,
  },
  switch: {
    borderColor: GlobalStyles.color.secondary,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    backgroundColor: GlobalStyles.color.primary,
    color: GlobalStyles.color.secondary,
    borderRadius: 8,
    fontFamily: GlobalStyles.fontFamily.interRegular,
  },
});

export default OrdersListScreen;
