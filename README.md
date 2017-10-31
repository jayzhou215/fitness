# install
> yarn add watchman
yarn install
yarn start


# icon resources
https://github.com/oblador/react-native-vector-icons
https://expo.github.io/vector-icons/

```javascript
import { Ionicons } from '@expo/vector-icons'

<Ionicons name='ios-pizza' color='red' size={100} />
```

# FlatList
```
renderItem = (item) => {
  return <RenderView {...item} />
}

render () {
  return (
    <View>
      <FlatList
        data={dataList}
        renderItem={this.renderItem}>
      </FlatList>
    </View>
  )
}
```

# [SectionList](https://facebook.github.io/react-native/docs/sectionlist.html)
> add section headers to a list

# form
* TextInput
* KeyboardAvoidingView wrap TextInput
* Slider
* Switch

# Image
```
<View>
  <Image source={require('./path/to/image/file')} />
  <Image source={ {uri:'http://image/link'} } />
</View>
```

# [other component list](https://facebook.github.io/react-native/docs/components-and-apis.html#components-and-apis)
* [ActivityIndicator](https://facebook.github.io/react-native/docs/activityindicator.html)
* [Picker](https://facebook.github.io/react-native/docs/picker.html)
* [WebView](https://facebook.github.io/react-native/docs/webview.html)
* [Modal](https://facebook.github.io/react-native/docs/modal.html)
* [Components and APIs](https://facebook.github.io/react-native/docs/components-and-apis.html)

# [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html)

[Understanding React Native flexbox layout](https://medium.com/the-react-native-log/understanding-react-native-flexbox-layout-7a528200afd4)
# cross platform api
* [Platform Specific Code](https://facebook.github.io/react-native/docs/platform-specific-code.html)
Platform.OS === 'ios'
  ? <Ionicons name='ios-pizza' size={100} color='red' />
  : <Ionicons name='md-pizza' size={100} color='red' />

# CSS in JS Libraries
[Glamorous](https://github.com/robinpowered/glamorous-native)
[Styled Components](https://github.com/styled-components/styled-components)

# [StatusBar props](https://facebook.github.io/react-native/docs/statusbar.html#props)

# navigation
[TabNavigator](https://reactnavigation.org/docs/navigators/tab)
StackNavigator
this.props.navigation.navigate()
this.props.navigation.state.params.entryId
```
static navigationOptions = ({ navigation }) => {
  const { entryId } = navigation.state.params
  const year = entryId.slice(0, 4)
  const month = entryId.slice(5, 7)
  const day = entryId.slice(8)
  return {
    title : `${month}/${day}/${year}`
  }
}
```
# [Stack Navigation in React Native](https://medium.com/@swathylenjini/stack-navigation-in-react-native-2cd00374ff3a)

# native features
## [Location](https://docs.expo.io/versions/latest/sdk/location.html)


# In China
This code may help speed up install
```
yarn config set registry 'https://registry.npm.taobao.org'
```
