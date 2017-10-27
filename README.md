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

# cross platform api
Platform.OS === 'ios'
  ? <Ionicons name='ios-pizza' size={100} color='red' />
  : <Ionicons name='md-pizza' size={100} color='red' />

# In China
This code may help speed up install
```
yarn config set registry 'https://registry.npm.taobao.org'
```
