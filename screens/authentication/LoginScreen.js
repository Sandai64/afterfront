import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import GlobalStyles from '../../config/styles';
import { authActionLogin } from '../../services/authService';

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
  const [showLoading, setShowLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const delegateShowError = () => {
    setShowError(true);
    setTimeout(setShowError(false), 5000);
  }

  // Define login action
  const actionLogin = async () => {
    setShowLoading(true);
    
    try {
      authActionLogin('FIXME', 'FIXME');
    } catch (_) {
      delegateShowError();
    }

    setShowLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeader}>Connexion</Text>
      <Button color="#261F18" title="OK, allons-y !" />

      {showLoading &&
        <Text>Loading...</Text>}

      {showError &&
        <Text>An error occured.</Text>}
    </View>
  );
};

export default LoginScreen;
