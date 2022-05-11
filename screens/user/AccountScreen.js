import { useEffect, useState } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Button } from 'react-native';
import GlobalStyles from '../../config/styles';
import { getEmploye } from '../../services/AccountService';
import { Loader } from '../../components';

const AccountScreen = ({ navigation }) => {
  const [employe, setEmploye] = useState({});

  useEffect(() => {
    getEmploye().then(value => {
      setEmploye(value);
    });
  }, []);

  return (
    (Object.keys(employe).length && (
      <View style={styles.pageContainer}>
        <View>
          <View style={styles.margin}>
            <Text style={styles.text}>Vous êtes connecté en tant que :</Text>
            <Text style={[styles.text, styles.bold]}>
              {employe.firstname} {employe.lastname}
            </Text>
          </View>

          <View style={styles.margin}>
            <Text style={styles.text}>Adresse mail :</Text>
            <Text style={[styles.text, styles.bold]}>{employe.username}</Text>
          </View>

          <View style={styles.margin}>
            <Text style={styles.text}>Adresse :</Text>
            <Text style={[styles.text, styles.bold]}>{employe.address}</Text>
          </View>

          <View style={styles.margin}>
            <Text style={styles.text}>Ville :</Text>
            <Text style={[styles.text, styles.bold]}>
              {employe.zip_code} {employe.city}
            </Text>
          </View>
        </View>

        <Button
          title="Se déconnecter"
          color={GlobalStyles.color.deny}
          onPress={() => {
            AsyncStorageLib.removeItem('token').then(() => {
              navigation.replace('Login', {
                screen: 'User',
              });
            });
          }}
        />
      </View>
    )) || <Loader />
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    width: '100%',
    height: '100%',
    backgroundColor: GlobalStyles.color.primary,
    paddingVertical: 8,
  },
  fontTitle: {
    fontFamily: 'Inter_Regular',
    fontWeight: 'bold',
    fontSize: 32,
  },
  hr: {
    width: '100%',
    borderColor: '#9f9f9f',
    marginVertical: 12,
    borderTopWidth: 1,
  },
  text: {
    fontFamily: GlobalStyles.fontFamily.interRegular,
    fontSize: 18,
  },
  margin: {
    marginVertical: 8,
  },
  bold: {
    fontWeight: "bold"
  }
});

export default AccountScreen;
