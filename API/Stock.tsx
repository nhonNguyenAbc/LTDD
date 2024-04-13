import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StockButton, {StockData} from './StockButton';
import {getStockInfo} from './api';

const stockList = [
  {stockName: 'VIN GROUP', stockCode: 'VIN'},
  {stockName: 'FLC', stockCode: 'FLC'},
  {stockName: 'VIETJET', stockCode: 'VIETJET'},
  {stockName: 'MASSAN', stockCode: 'MASSAN'},
  {stockName: 'VINAMILK', stockCode: 'VINAMILK'},
  {stockName: 'SRC', stockCode: 'SRC'},
  {stockName: 'HSBC', stockCode: 'HSBC'},
  {stockName: 'SAM HOLDING', stockCode: 'SAM HOLDING'},
  {stockName: 'PETROLIMEX', stockCode: 'PETROLIMEX'},
];

function Stock(): React.JSX.Element {
  const [stockName, setStockName] = useState(stockList[0].stockName);
  const [stockCode, setStockCode] = useState(stockList[0].stockCode);
  const [changePercent, setChangePercent] = useState('8.700 (-1.5387%)');

  const handlePress = (stock: StockData) => {
    setStockName(stock.stockName);
    setStockCode(stock.stockCode);

    getStockInfo(stock.stockCode).then(changePercent => {
      setChangePercent(changePercent);
    });
  };

  return (
    <View style={styles.conatainer}>
      <View style={styles.containerItem1}>
        <Text style={styles.stockNameText}>{stockName}</Text>
        <Text style={styles.stockNameCode}>{stockCode}</Text>
        <Text style={styles.stockChangePercent}>{changePercent}</Text>
      </View>
      <View style={styles.containerItem2}>
        <StockButton stock={stockList[0]} pressButton={handlePress} />
        <StockButton stock={stockList[1]} pressButton={handlePress} />
        <StockButton stock={stockList[2]} pressButton={handlePress} />
        <StockButton stock={stockList[3]} pressButton={handlePress} />
        <StockButton stock={stockList[4]} pressButton={handlePress} />
        <StockButton stock={stockList[5]} pressButton={handlePress} />
        <StockButton stock={stockList[6]} pressButton={handlePress} />
        <StockButton stock={stockList[7]} pressButton={handlePress} />
        <StockButton stock={stockList[8]} pressButton={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  containerItem1: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerItem2: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  stockNameText: {
    fontSize: 40,
  },
  stockNameCode: {
    fontSize: 80,
    fontWeight: '500',
  },
  stockChangePercent: {
    fontSize: 40,
    color: 'red',
  },
});

export default Stock;
