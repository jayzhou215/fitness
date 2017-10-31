import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export default class Live extends Component {

  state = {
    status: 'denied',
    coords: null,
    direction: '',
  }

  render(){
    const { status, coords, direction } = this.state
    if (status === null) {
      return (
        <ActivityIndicator style={{margin: 30}} />
      )
    }
    if (status === 'denied') {
      return (
        <View>
          <Text>Denied</Text>
        </View>
      )
    }
    if (status === 'undeterminded') {
      return  (
        <View>
          <Text>Undeterminded</Text>
        </View>
      )
    }
    return (
      <View>
        <Text>Live</Text>
      </View>
    )
  }
}
