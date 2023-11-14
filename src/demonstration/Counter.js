import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCounter] = useState(0)

  useEffect(() => {
   console.log('count value is: ' + count)
  }, [count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`} </Text>
      <Button
        color="red"
        title="Increase the count"
        onPress={() => {
          setCounter(count + 1);
        }}
      />

      <Button
        color="green"
        title="decrease the count"
        onPress={() => {
          setCounter(count - 1);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})

export default Counter
