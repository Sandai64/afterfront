import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../config/styles';

const ProductItem = ({ item }) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        x{item.quantite} {item.idProduitDeclinaison.idProduit.nom}
      </Text>
      <Text style={style.text}>
        {item.idProduitDeclinaison.idProduit.prixUnitaire} EUR
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    padding: 18,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  text: {
    fontFamily: GlobalStyles.fontFamily.interRegular,
  },
});

export default ProductItem;
