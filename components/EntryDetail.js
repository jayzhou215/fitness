import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import MetricCard from './MetricCard'
import { white } from '../utils/colors'
import { addEntry } from '../actions/index'
import { timeToString, getLoggedDisplayText } from '../utils/helpers'
import { removeEntry } from '../utils/api'
import TextButton from './TextButton'

class EntryDetail extends Component {

  static navigationOptions = ({navigation}) => {
    const entryId = navigation.state.params.entryId
    const year = entryId.slice(0, 4)
    const month = entryId.slice(5, 7)
    const day = entryId.slice(8)
    return {
      title : `${month}/${day}/${year}`
    }
  }

  reset = () => {
    const {remove, goBack, entryId} = this.props
    remove()
    goBack()
    removeEntry(entryId)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.metrics !== null && !nextProps.metrics.today
  }

  render() {
    const { metrics } = this.props

    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics} />
        <Text>Entry Detail - {this.props.entryId}</Text>
        <TextButton  onPress={this.reset} style={{margin: 20}}>
          Reset
        </TextButton>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 15,

  }
})

function mapStateToProps(state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    entryId,
    metrics: state[entryId],
  }
}

function mapDispatchToProps(dispatch, { navigation } ) {
  const { entryId } = navigation.state.params
  return {
    remove: () => dispatch(addEntry({
      [entryId] : timeToString() === entryId
                    ? getLoggedDisplayText()
                    : null,
    })),
    goBack: () => navigation.goBack(),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail)
