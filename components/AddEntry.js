import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { getMetricMetaInfo, timeToString, getLoggedDisplayText } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciStepper from './UdaciStepper'
import DateHeader from './DateHeader'
import TextButton from './TextButton'
import { Ionicons } from '@expo/vector-icons'
import { submitEntry, removeEntry } from '../utils/api'
import { connect } from 'react-redux'
import { addEntry } from '../actions/index'
import { white, red, purple } from '../utils/colors'

function SubmitButton ({onPress}) {
  return (
    <TouchableOpacity
      style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn }
      onPress={onPress}>
      <Text style={ styles.submitText } >Submit</Text>
    </TouchableOpacity>
  )
}

class AddEntry extends Component {

  state = {
    run : 0,
    bike : 0,
    swim : 0,
    sleep : 0,
    eat : 0,
  }

  increament = (metric) => {
    const {max, step} = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric] : count > max ? max : count
      }
    })
  }

  decreament = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step
      return {
        ...state,
        [metric] : count < 0 ? 0 : count
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric] : value
    }))
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state
    this.props.dispatch(addEntry({
      [key] : entry
    }))
    // route back to home

    submitEntry(key, entry)

    // clean notification
    this.setState(()=>({
      run : 0,
      bike : 0,
      swim : 0,
      sleep : 0,
      eat : 0,
    }))
  }

  reset = () => {
    const key = timeToString()
    this.props.dispatch(addEntry({
      [key] : getLoggedDisplayText()
    }))

    removeEntry(key)
    // route to home

    // clean db

  }

  render() {
    if (this.props.alreadyLogged) {
      return (
        <View style={styles.container}>
          <Ionicons name='ios-happy-outline' style={styles.image}/>
          <Text style={styles.text}>You already logged your infomation for today</Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
    }

    const metaInfos = getMetricMetaInfo()
    const date = (new Date()).toString()
    return (
      <View>

        <DateHeader date={date}/>
        {Object.keys(metaInfos).map((key)=> {
          const {getIcon, type, ...rest } = metaInfos[key]
          const value = this.state[key]
          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
                  ? <UdaciSlider
                      value={value}
                      onChange={ (value)=>{ this.slide(key, value) } }
                      {...rest}
                      />
                  : <UdaciStepper
                      value={value}
                      onIncreament={ () => { this.increament(key) } }
                      onDecreament={ () => { this.decreament(key) }}
                      {...rest}
                      />}
            </View>
          )
        })
      }
      <SubmitButton onPress={this.submit} />
      </View>
    )
  }
}

function mapStateToProp(state) {
  const key = timeToString()
  return {
    alreadyLogged : state[key] && typeof state[key].today === 'undefined'
  }
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    borderRadius: 7,
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    height: 45,
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    borderRadius: 2,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }

})

export default connect(mapStateToProp)(AddEntry)
