import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NavigationBottom from './src/navigation/NavigationBottom'
import { Provider } from 'react-redux'


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBottom />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#142D77',
    // padding: 10
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textCont: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 40,
    padding: 10
  },
  tasks: {
    height: '100%',
    padding: 10,
  },
  textTask: {
    color: '#ffffff',
    fontSize: 30,
  },
});
