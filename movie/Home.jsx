import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListMovie from './ListMovie';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeder}>{'Movie Explorer'}</Text>
      </View>
      <View style={styles.content}>
        <ListMovie nameMovie={(movieName = 'Batman Begins (2005)')} />
        <ListMovie
          nameMovie={(movieName = 'Batman v Superman: Dawn of Justice (2016)')}
        />
        <ListMovie
          nameMovie={(movieName = 'Batman v Superman: Dawn of Justice (2016)')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: '#FF3333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 15,
  },
  textHeder: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Home;
