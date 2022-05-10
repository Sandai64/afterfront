import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import GlobalStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 64,
    paddingLeft: 18,
    paddingRight: 18,
  },
  pageHeader: {
    borderBottomColor: 'black',
    marginBottom: 24,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    width: 'fit-content',
    fontSize: 28,
  },
});

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageHeader}>Connexion</Text>
      <Button color="#261F18" title="OK, allons-y !" />
    </View>
  );
};

export default LoginScreen;
