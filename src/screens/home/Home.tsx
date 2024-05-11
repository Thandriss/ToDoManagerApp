import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import ToDo from '../../component/ToDo';
type Props = {}

class ToDoList {
  name: string;
  time: string;
  constructor(name: string, time: string){
      this.name= name;
      this.time= time;
    }
}

const Home = (props: Props) => {
  const list: Array<ToDoList> = [new ToDoList("go to school", "08:00"), new ToDoList("clean room", "08:00")];
  return (
    <View>
        <LinearGradient
          colors={['#000000', '#142D77']}
          style={styles.tasks}
        >
          <Text style={styles.header}>Your tasks</Text>
          {list.map((item) => <ToDo name={item.name} time={item.time} key={item.name}></ToDo>)}
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
    fontSize: 20,
    marginTop: 50,
  },
  header: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 50,
  },
});
export default Home