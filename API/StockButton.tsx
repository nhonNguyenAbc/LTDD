import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
const window = Dimensions.get('window');

export type StockData = {
  stockName: string;
  stockCode: string;
};

type StockProps = {
  stock: StockData;
  pressButton: Function;
};

function StockButton({stock, pressButton}: StockProps): React.JSX.Element {
  const handlePress = () => {
    pressButton(stock);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text>{stock.stockName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: 'lightgrey',
    width: (window.width - 15 * 4) / 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 10,
  },
});

export default StockButton;
