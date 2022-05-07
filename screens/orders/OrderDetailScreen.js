import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import GlobalStyles from '../../config/styles';
import { Loader, ProductItem } from '../../components/';
import API from '../../services/';

const OrderDetailScreen = ({
  route: {
    params: { item, states },
  },
}) => {
  const [selectedValue, setSelectedValue] = useState(item.idStatut.idStatut);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.Orders.getOrderProducts(item.idCommande);
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        API.Orders.setOrderStatut(item.idCommande, selectedValue);
      } catch (e) {
        console.log(e);
        return;
      }
      item.idStatut = states.filter(v => v.idStatut == selectedValue)[0];
    })();
  }, [selectedValue]);

  return (
    (products.length && (
      <View style={style.container}>
        <View style={style.head}>
          <View style={style.info}>
            <Text style={style.text}>#{item.idCommande}</Text>
            <Text style={style.text}>Table {item.idTable}</Text>
            <Text style={style.text}>
              {(products.length &&
                products
                  .map(
                    product =>
                      product.idProduitDeclinaison.idProduit.prixUnitaire *
                      product.quantite *
                      (1 +
                        product.idProduitDeclinaison.idProduit.idTva
                          .pourcentage /
                          100),
                  )
                  .reduce((a, b) => a + b)) ||
                (0).toFixed(2)}{' '}
              € TTC
            </Text>
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
            >
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
        <View style={style.body}>
          <FlatList
            style={style.list}
            data={products}
            renderItem={({ item }) => <ProductItem item={item} />}
            keyExtractor={(item, i) => i}
          />
        </View>
      </View>
    )) || <Loader />
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
  picker: {
    backgroundColor: GlobalStyles.color.primary,
    color: GlobalStyles.color.secondary,
    borderRadius: 8,
    fontFamily: GlobalStyles.fontFamily.interRegular,
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
  text: {
    fontFamily: GlobalStyles.fontFamily.interRegular,
  },
});

export default OrderDetailScreen;
