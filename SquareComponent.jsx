import React from 'react';
import {Text, View} from 'react-native';

const SquareComponent = ({a, b, color, so}) => {
  return (
    <View
      style={{
        width: a,
        height: b,
        backgroundColor: color, // Màu sắc của hình vuông
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center',
        margin: 10,
      }}>
      <Text>{so}</Text>
    </View>
  );
};

export default SquareComponent;
