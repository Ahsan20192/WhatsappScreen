import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons

import {Feather,Fontisto,MaterialCommunityIcons} from 'react-native-vector-icons'

import Chats from './Chats';
import Calls from './Calls';
import Communities from './Communities';
import Status from './Status';
 
//const Tab=createMaterialTopTabNavigator();
const Tab=createBottomTabNavigator();
export default  Navigation=()=> {
  return (

    <Tab.Navigator 
    initialRouteName='Chat'
      screenOptions={{
        tabBarActiveTintColor:'white',
       
        tabBarLabelStyle:{
          fontWeight:'bold'
        },
        tabBarStyle:{
          backgroundColor:'green'
        }

      }}
    >
       <Tab.Screen 
        
       name="Community"
       component={Communities} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-group" size={size} color={color} />
        ),
      }}
  />  
       <Tab.Screen name='Chat' component ={Chats} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" size={size} color={color} />
            ),
          }}
       />
        <Tab.Screen name='Status' component ={Status} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="circle-double" size={size} color={color} />
            ),
          }}
       />
       
        <Tab.Screen name='Calls' component ={Calls} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="phone-outline" size={size} color={color} />
            ),
          }}
       />


    </Tab.Navigator>
        
  
  );
}
const styles = StyleSheet.create({
 
});
