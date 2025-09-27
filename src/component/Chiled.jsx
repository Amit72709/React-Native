import { View, Text } from 'react-native'
import React from 'react'

const Chiled = (val) => {
    let value=val.data;
  return (
    <View>
      <Text>Chiled</Text>
      <Text>This is the value of ince. and dec.= {value} </Text>
    </View>
  )
}

export default Chiled