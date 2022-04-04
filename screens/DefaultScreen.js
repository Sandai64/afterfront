import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const DefaultScreen = ({navigation}) => {

  console.log(navigation.getState());

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default DefaultScreen;
