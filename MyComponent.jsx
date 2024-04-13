// Tạo một thành phần mới, ví dụ: MyComponent.js
import React from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class MyComponent extends React.Component {
  render() {
    return (
      <View>
        <View style={{height: 20}} />
        <Text>Hello World</Text>
        <Image
          style={{height: 100, width: 100}}
          source={{
            uri: 'http://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
          }}
        />
        <Switch />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value="Useless TextInput"
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value="Useless Multiline TextInput"
        />
        <TouchableOpacity
          onPress={() => {
            /* Do something */
          }}
          style={{
            borderColor: '#f00',
            backgroundColor: '#faa',
            borderWidth: 1,
          }}>
          <Text>Touch me for Opacity</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => {
            /* Do something */
          }}
          underlayColor="#f00a"
          style={{
            borderColor: '#f00',
            backgroundColor: '#faa',
            borderWidth: 1,
          }}>
          <Text>Touch me for Opacity</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
