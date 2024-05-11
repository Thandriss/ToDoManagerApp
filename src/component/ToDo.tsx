import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox';
type Props = {
  name: string,
  time: string
}

const ToDo = (props: Props) => {
  let name = props.name;
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.toDoContainer}>
      <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style ={styles.check}
        />
      <Text style={styles.textTask}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    toDoContainer: {
      // flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      padding: 10
    },
    textTask: {
      color: '#ffffff',
      fontSize: 30,
      // marginTop: 20,
    },
    check: {
       margin:10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    }
  });
export default ToDo