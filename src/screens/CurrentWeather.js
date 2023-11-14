import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highlowWrapper,
    highlow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={highlowWrapper}
          messageOneStyles={highlow}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        messageOne={`It's sunny`}
        messageTwo={weatherType['Thunderstorm'].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highlow: {
    color: 'black',
    fontSize: 20
  },
  highlowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 45
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather
