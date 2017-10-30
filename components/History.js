import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions/index'
import { fetchCalenderResultes } from '../utils/api'
import { timeToString, getLoggedDisplayText } from '../utils/helpers'
import UdaciFitnessCalendar from 'udacifitness-calendar'
import { white } from '../utils/colors'

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

  renderItem = ({today, ...metrics}, formattedDate, key) => (
    <View style={styles.item}>
      {today
        ? <Text>{JSON.stringify(today)}</Text>
        : <Text>{JSON.stringify(metrics)}</Text>
      }
    </View>
  )

  renderEmptyDate (formattedDate) {
    return (
      <View>
        <Text>No data for this day</Text>
      </View>
    )
  }

  render() {
    const { entries } =  this.props
    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }

  }
})

function mapStateToProps(entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(History)