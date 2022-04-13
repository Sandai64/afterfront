import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalStyles from '../../config/styles';

const UserScreen = () => {
    return (
        <View style={style.container}>
            <Text>UserScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.color.primary,
        height: "100%"
    }
});

export default UserScreen;