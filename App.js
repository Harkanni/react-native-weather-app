import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hooks/UseGetWeather'
import ErrorItem from './src/components/ErrorItem'

import Tabs from './src/components/Tabs'
import OurButton from './src/demonstration/OurButton'

const Tab = createBottomTabNavigator()

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? <ErrorItem /> : <ActivityIndicator size={'large'} color={'blue'} />}
    </View>
  )

// return (
//    <View style={styles.container}>
//       <OurButton />
//       {error ? <ErrorItem /> : <ActivityIndicator size={'large'} color={'blue'} />}
//    </View>
// )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
