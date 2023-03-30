import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Can you see this? </Text>
      <Text> Git commit and push test - Miguel</Text>
      <Text> 3rd commit and push test - Miguel</Text>
      <Text> Avi Test 4 - Avi</Text>
      <Text> 4th commit test for anya - Miguel</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
