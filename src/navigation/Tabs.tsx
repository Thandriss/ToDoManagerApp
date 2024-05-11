import React from 'react'
import { View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/settings/Settings';
import AddTask from '../screens/addtask/AddTask';
import Home from '../screens/home/Home';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'

type Props = {}
const Tab = createBottomTabNavigator();

const Tabs = (props: Props) => {
  return (
    <Tab.Navigator initialRouteName= "Home"
    screenOptions={{
      tabBarStyle: {backgroundColor: '#142D77'},
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <Feather name="home"  color={focused ? '#E2837E':'white'} size={26} />
        ),
      }}/>
      <Tab.Screen name="Add tasks" component={AddTask} 
        options={{
          tabBarLabel: 'Add tasks',
          tabBarIcon: ({focused}) => (
            <Entypo name="add-to-list"  color={focused ? '#E2837E':'white'} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({focused}) => (
          <Feather name="settings" color={focused ? '#E2837E':'white'} size={26} />
        ),
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs