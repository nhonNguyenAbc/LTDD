// Tạo một thành phần mới, ví dụ: MyComponent.js
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class Ex3 extends React.Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <View style={[styles.box, {backgroundColor: 'red'}]} />
          <View style={[styles.box, {backgroundColor: 'green'}]} />
        </View>
        <View style={[styles.inner, {alignItems: 'flex-end'}]}>
          <View style={[styles.box, {backgroundColor: 'blue'}]} />
          <View style={[styles.box, {backgroundColor: 'pink'}]} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
  },
});
