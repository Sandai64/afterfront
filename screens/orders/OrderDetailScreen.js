import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import GlobalStyles from '../../config/styles';
import ProductItem from '../../components/orders/ProductItem';

const OrderDetailScreen = () => {
  const [states, setStates] = useState(['default']);
  const [selectedValue, setSelectedValue] = useState(states[0]);
  const [products, Products] = useState(['name']);

  useEffect(() => {
    (async () => {
      try {
        // Fetch le statut de la commande
        setSelectedValue({ id: 1, name: 'En attente' });
      } catch (e) {
        console.log(e);
      }
    })();

    (async () => {
      try {
        // Fetch les statuts
        setStates([
          'En attente',
          'En cours de préparation',
          'Commande terminée',
        ]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // Change statut
      } catch (e) {
        console.log(e);
      }
    })();
  }, [selectedValue]);

  return (
    <View style={style.container}>
      <View style={style.head}>
        <View style={style.info}>
          <Text>#4854</Text>
          <Text>Table 12</Text>
          <Text>TTC 89 EUR</Text>
        </View>
        <View style={style.switch}>
          <Picker
            selectedValue={selectedValue}
            mode="dropdown"
            style={{
              height: 50,
              minWidth: 150,
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            itemStyle={{ backgroundColor: 'red' }}
          >
            {states.map(value => (
              <Picker.Item label={value} value={value} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={style.body}>
        <FlatList
          style={style.list}
          data={products}
          renderItem={({ item }) => <ProductItem item={products} />}
          keyExtractor={(item, i) => i}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    height: '100%',
  },
  head: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    alignItems: 'center',
  },
  info: {},
  switch: {
    borderColor: GlobalStyles.color.secondary,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 13,
  },
  body: {
    marginTop: 25,
    marginHorizontal: 25,
    backgroundColor: GlobalStyles.color.secondary,
    borderRadius: 8,
    minHeight: '75%',
    padding: 20,
  },
  list: {},
});

export default OrderDetailScreen;
