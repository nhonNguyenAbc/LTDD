// Tạo một thành phần mới, ví dụ: MyComponent.js
import React from 'react';
import SquareComponent from './SquareComponent';
import {View, StyleSheet} from 'react-native';

export default class FlexComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SquareComponent a={30} b={60} color={'#66ff66'} so={1} />
        <SquareComponent a={60} b={30} color={'yellow'} so={2} />
        <SquareComponent a={60} b={60} color={'red'} so={3} />
        <SquareComponent a={120} b={60} color={'blue'} so={4} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: '#F3F0F0',
  },
});
