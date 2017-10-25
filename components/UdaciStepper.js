import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function UdaciStepper({ max, step, unit, value, onIncreament, onDecreament }) {

  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecreament}>
          <FontAwesome name='minus' size={30} color={'black'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncreament}>
          <FontAwesome name='plus' size={30} color={'black'}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )

}
