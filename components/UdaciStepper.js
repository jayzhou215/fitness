import React from 'react'
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, purple, gray } from '../utils/colors'

export default function UdaciStepper({ max, step, unit, value, onIncreament, onDecreament }) {

  return (
    <View style={[styles.row, {justifyContent: 'space-between'}]} >
      { Platform.OS === 'ios'
        ? <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
               style={[styles.iosButton, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
               onPress={onDecreament}>
              <Entypo name='minus' size={30} color={purple}/>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.iosButton, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
               onPress={onIncreament}>
              <Entypo name='plus' size={30} color={purple}/>
            </TouchableOpacity>
          </View>
        : <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
               style={[styles.androidButton, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
               onPress={onDecreament}>
              <FontAwesome name='minus' size={30} color={white}/>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.androidButton, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
               onPress={onIncreament}>
              <FontAwesome name='plus' size={30} color={white}/>
            </TouchableOpacity>
          </View>
      }
      <View style={styles.metricCounter}>
        <Text style={{fontSize: 24}} >{value}</Text>
        <Text style={{fontSize: 18, color: gray}} >{unit}</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iosButton: {
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight:25,
  },
  androidButton: {
    borderRadius: 2,
    backgroundColor: purple,
    padding: 10,
    margin: 5,

  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
