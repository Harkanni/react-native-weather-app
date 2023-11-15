import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Location from 'expo-location'

import Tabs from './src/components/Tabs'

const Tab = createBottomTabNavigator()

const App = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      // console.log(status)
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }

      console.log('Permission granted')
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if(location) {
   console.log(location)
  }

  if (loading) {
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
    flex: 1
  }
})

export default App
