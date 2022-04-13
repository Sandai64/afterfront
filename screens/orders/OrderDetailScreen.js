import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalStyles from '../../config/styles';

const OrderDetailScreen = () => {
    return (
        <View style={style.container}>
            <Text>OrderDetailScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.color.primary,
        height: "100%"
    }
});

export default OrderDetailScreen;