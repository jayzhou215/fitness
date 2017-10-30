import React from 'react'
import { View, StatusBar } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import { Constants } from 'expo'
import { purple } from './utils/colors'

function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar  translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  componentDidMount(){
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content'/>
          <History />
        </View>
      </Provider>
    )
  }
}
