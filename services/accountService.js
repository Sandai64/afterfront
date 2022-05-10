import AsyncStorageLib from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { instance } from '../config/axios';

// Automatically switch routes based on context
async function accountRouterDelegate(navigation) {
  const localToken = await AsyncStorageLib.getItem('token');
  
  // User hasn't setup their account yet
  if (!localToken) {
    console.log('preparing to replace path');
    navigation.replace('Login');
    console.log('replaced path');
    return;
  }

}

const getEmploye = async () => {
  const localToken = await AsyncStorageLib.getItem('token');

  if(!localToken) return null;

  return jwtDecode(localToken);
}

export { accountRouterDelegate, getEmploye }