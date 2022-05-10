import { View, Text } from "react-native";

function AccountScreen({ navigation }) {
  const styles = StyleSheet.create({
    pageContainer: {
      display: 'flex',
      justifyContent: 'center',
      paddingHorizontal: 32,
      width: '100%',
      height: '100%',
    },
    fontTitle: {
      fontFamily: 'Inter_Regular',
      fontWeight: 'bold',
      fontSize: 32
    },
    hr: {
      width: '100%',
      borderColor: '#9f9f9f',
      marginVertical: 12,
      borderTopWidth: 1
    }
  });

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.fontTitle}>Mon compte</Text>
      <View style={styles.hr}/>
    </View>
  );
}