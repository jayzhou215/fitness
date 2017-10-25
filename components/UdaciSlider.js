import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider({max, unit, value, step, onChange}) {
  return (
    <View>
      <Slider
        maximumValue={max}
        value={value}
        minimumValue={0}
        step={step}
        onValueChange={onChange}
        />
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  )
}
