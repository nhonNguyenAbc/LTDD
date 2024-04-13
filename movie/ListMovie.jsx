import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
const ListMovie = ({nameMovie, url}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 120,
          height: 180,
          resizeMode: 'cover',
        }}
        source={{
          uri: 'https://m.media-amazon.com/images/I/41PfeNaQeeL._SY445_SX342_.jpg',
        }}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.TenMovie}>{nameMovie}</Text>
      </View>
      <Icons name="chevron-right" size={25} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  TenMovie: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    margin: 5,
  },
});
export default ListMovie;
