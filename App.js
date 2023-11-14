import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Tabs from './src/components/Tabs'

const Tab = createBottomTabNavigator()

const App = () => {
  const [loading, setLoading] = useState(true)
  if(loading) {
   return (
      <View style={styles.container}>
         <ActivityIndicator />
      </View>
   )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      flex: 1,
   },
})

export default App
