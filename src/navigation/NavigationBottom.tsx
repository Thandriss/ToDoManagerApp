import React from 'react'
import { StyleSheet, View } from 'react-native'
// import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs'
type Props = {}

const NavigationBottom = (props: Props) => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchTasks())
  //   dispatch(fetchReminders())
  // }, [])

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
  // return (
  //   <View>NavigationBottom</View>
  // )
}
const styles = StyleSheet.create({
  
});
export default NavigationBottom