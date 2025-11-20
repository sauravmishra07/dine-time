import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {  } from "../";

const TabLayut = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInActiveTintColor: Colors.dark.text,
        tabBarStyle: {
            backgroundColor: Colors
        }

     }}>
      <Tabs.Screen name="home" options={{ title: "Home"}} />
      <Tabs.Screen name="history" options={{ title: "History"}}/>
      <Tabs.Screen name="profile" options={{ title: "Profile"}}/>
    </Tabs>
  )
}

export default TabLayut