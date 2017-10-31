import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'
import { Foundation } from '@expo/vector-icons'

export default class Live extends Component {

  state = {
    status: 'undeterminded',
    coords: null,
    direction: '',
  }

  askPermission = () => {

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
        <View style={styles.center}>
          <Foundation name='alert' size={50}/>
          <Text>You need enable location services for this app.</Text>
          <TouchableOpacity style={styles.button} onPress={this.askPermission}>
            <Text style={styles.buttonText}>Enable</Text>
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    justifyContent: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  }
})
