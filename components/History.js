import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions/index'
import { fetchCalenderResultes } from '../utils/api'
import { timeToString, getLoggedDisplayText } from '../utils/helpers'

class History extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch
    fetchCalenderResultes()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({entries}) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
            [timeToString()]: getLoggedDisplayText()
          }))
        }
      })
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

function mapStateToProps(entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(History)
