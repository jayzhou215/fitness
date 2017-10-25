import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciStepper from './UdaciStepper'
import DateHeader from './DateHeader'
import TextButton from './TextButton'
import { Ionicons } from '@expo/vector-icons'
import { submitEntry, removeEntry } from '../utils/api'

function SubmitButton ({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {

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
    // udpate redux

    // route back to home

    // save to db
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
    // udpate redux
    removeEntry(key)
    // route to home

    // clean db

  }

  render() {
    if (this.props.todayLogged) {
      return (
        <View>
          <Ionicons name='ios-happy-outline' size={100} />
          <Text>You already logged your infomation for today</Text>
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
