import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
type Props = {}

const Settings = (props: Props) => {
  return (
    <View>
      <LinearGradient
          colors={['#000000', '#142D77']}
          style={styles.tasks}
        >
          <Text style={styles.textTask}>Settings</Text>
        </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  navStyle: {
    position: 'absolute',
    backgroundColor: '#142D77',
    height: '90%',
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#142D77',
  },
  textCont: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 50,
    padding: 10
  },
  tasks: {
    height: '100%',
    padding: 10,
  },
  textTask: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 50,
  },
});
export default Settings