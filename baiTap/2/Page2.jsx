// Tạo một thành phần mới, ví dụ: MyComponent.js
import React from 'react';
import {Image, Text, StyleSheet, View, ImageBackground} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

export default class Page2 extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.a}>
          <ImageBackground
            source={require('./image/image2.png')}
            style={styles.tagBackground}>
            <View style={styles.container}>
              <View style={[styles.spaceBetween]}>
                <Icons name="chevron-left" size={25} color="black" />
                <Icons name="ellipsis-v" size={25} color="black" />
              </View>

              <View style={{height: 20}} />
              <Image
                style={{
                  width: 150,
                  height: 50,
                  resizeMode: 'contain',
                }}
                source={require('./image/bestseller.png')}
              />
              <Text style={[styles.baseText, styles.titleText]}>
                {'Design Thinking'}
              </Text>
              <View style={{height: 10}} />
              <View
                style={[
                  {alignItems: 'center'},
                  {flexDirection: 'row'},
                  {gap: 10},
                ]}>
                <Icons name="users" size={22} color="#a0a0a0" />
                <Text
                  style={[
                    styles.baseText,
                    {fontSize: 16},
                    {fontWeight: 'bold'},
                    {color: '#a0a0a0'},
                  ]}>
                  {'55k'}
                </Text>
                <Icons name="star" size={22} color="#a0a0a0" />
                <Text
                  style={[
                    styles.baseText,
                    {fontSize: 16},
                    {fontWeight: 'bold'},
                    {color: '#a0a0a0'},
                  ]}>
                  {'4.1k'}
                </Text>
              </View>
              <View style={{height: 20}} />
              <Text style={[styles.baseText, styles.titleText]}>{'$50'}</Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={[
            styles.b,
            styles.container,
            {paddingTop: 30, borderTopLeftRadius: 15},
          ]}>
          <Text style={[styles.baseText, {fontWeight: 'bold'}]}>
            {'Course Content'}
          </Text>
          <View style={{height: 20}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={[
                styles.baseText,
                {
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#e0e0e0',
                  marginRight: 20,
                  alignSelf: 'flex-start',
                },
              ]}>
              {'01'}
            </Text>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                marginRight: 40,
                alignSelf: 'flex-start',
              }}>
              <Text
                style={[
                  styles.baseText,
                  {color: '#e0e0e0', fontSize: 16, alignSelf: 'flex-start'},
                ]}>
                {'5:35 mins'}
              </Text>
              <Text
                style={[
                  styles.baseText,
                  {fontWeight: 'bold', alignSelf: 'flex-start', fontSize: 18},
                ]}>
                {'Welcome to the Course'}
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: '#66ff66',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                borderRadius: 25,
              }}>
              <Icons name="play" size={20} color="white" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={[
                styles.baseText,
                {
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#e0e0e0',
                  marginRight: 20,
                  alignSelf: 'flex-start',
                },
              ]}>
              {'02'}
            </Text>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                marginRight: 40,
                alignSelf: 'flex-start',
              }}>
              <Text
                style={[
                  styles.baseText,
                  {color: '#e0e0e0', fontSize: 16, alignSelf: 'flex-start'},
                ]}>
                {'7:35 mins'}
              </Text>
              <Text
                style={[
                  styles.baseText,
                  {fontWeight: 'bold', alignSelf: 'flex-start', fontSize: 18},
                ]}>
                {'Design Thinking - Intro'}
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: '#66ff66',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                borderRadius: 25,
              }}>
              <Icons name="play" size={20} color="white" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={[
                styles.baseText,
                {
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#e0e0e0',
                  marginRight: 20,
                  alignSelf: 'flex-start',
                },
              ]}>
              {'03'}
            </Text>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                marginRight: 40,
                alignSelf: 'flex-start',
              }}>
              <Text
                style={[
                  styles.baseText,
                  {color: '#e0e0e0', fontSize: 16, alignSelf: 'flex-start'},
                ]}>
                {'10:35 mins'}
              </Text>
              <Text
                style={[
                  styles.baseText,
                  {fontWeight: 'bold', alignSelf: 'flex-start', fontSize: 18},
                ]}>
                {'Design Thinking Process'}
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: '#66ff66',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                borderRadius: 25,
              }}>
              <Icons name="play" size={20} color="white" />
            </View>
          </View>
          <View style={{height: 10}} />
          <View
            style={[
              {
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={[
                {
                  height: 50,
                  width: 70,
                  alignItems: 'center',
                  backgroundColor: '#FFEDEE',
                  padding: 12,
                  borderRadius: 30,
                },
              ]}>
              <Icons name="shopping-cart" color="#FF6670" size={25} />
            </View>
            <View
              style={{
                height: 50,
                backgroundColor: '#6E8AFA',
                flex: 1,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
                Buy Now
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  a: {height: '52%'},
  b: {height: '48%'},
  container: {
    padding: 10,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  flexWrap: {
    flexWrap: 'wrap',
    gap: 10,
  },
  baseText: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 20,
  },
  colorText: {
    color: '#a0a0a0',
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  tagContent: {padding: 30},
  tagBackground: {
    flex: 1,
    resizeMode: 'cover',

    overflow: 'hidden',
  },
});
