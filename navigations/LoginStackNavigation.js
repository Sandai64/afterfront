import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabNavigation } from "../navigations";
import { LoginScreen } from '../screens';

const Stack = createNativeStackNavigator();

const LoginStackNavigation = () => {

  return (
    <Stack.Navigator initialRouteName={"Login"} screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"Logged"} component={MainTabNavigation} />
    </Stack.Navigator>
  )
}

export default LoginStackNavigation;
