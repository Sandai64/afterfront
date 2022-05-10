import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { instance } from '../config/axios';

// Automatically switch routes based on context
async function accountRouterDelegate(navigation) {
  const localToken = await AsyncStorageLib.getItem('token');
  
  // User hasn't setup their account yet
  if (localToken.error) {
    navigation.replace('Login');
    return;
  }

}

export { accountRouterDelegate }