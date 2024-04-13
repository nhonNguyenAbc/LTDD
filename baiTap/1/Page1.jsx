import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';

export default class Page1 extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icons name="navicon" size={25} color="black" />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                resizeMode: 'cover',
              }}
              source={require('./image/avatar.png')}
            />
          </View>
          <View style={{height: 20}} />
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {'Hey Alex,'}
              {'\n'}
            </Text>
            <View style={{height: 30}} />
            <Text style={styles.colorText}>
              {'Find a course you want to learn'}
            </Text>
          </Text>
          <View style={{height: 30}} />
          <View style={styles.search}>
            <Icons name="search" size={25} color="black" />
            <Text style={[styles.baseText, {color: '#a0a0a0'}, {fontSize: 18}]}>
              {'Search for anything'}
            </Text>
          </View>
          <View style={{height: 25}} />
          <View style={styles.spaceBetween}>
            <Text style={[styles.baseText, {fontWeight: 'bold'}]}>
              {'Categories'}
            </Text>
            <Text style={[styles.baseText, {color: 'blue'}]}>{'See All'}</Text>
          </View>
          <View style={{height: 25}} />
          <View style={[styles.spaceAround, styles.flexWrap]}>
            <View style={styles.tag}>
              <ImageBackground
                source={require('./image/image1.png')}
                style={styles.tagBackground}>
                <View style={styles.tagContent}>
                  <Text
                    style={[styles.baseText, styles.titleText, {fontSize: 18}]}>
                    {'UX Design'}
                  </Text>
                  <Text
                    style={[styles.baseText, styles.colorText, {fontSize: 14}]}>
                    {'25 Courses'}
                  </Text>
                </View>
              </ImageBackground>
            </View>

            <View style={styles.tag}>
              <ImageBackground
                source={require('./image/image2.png')}
                style={styles.tagBackground}>
                <View style={styles.tagContent}>
                  <Text
                    style={[styles.baseText, styles.titleText, {fontSize: 18}]}>
                    {'Marketing'}
                  </Text>
                  <Text
                    style={[styles.baseText, styles.colorText, {fontSize: 14}]}>
                    {'20 Courses'}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.tag}>
              <ImageBackground
                source={require('./image/image3.png')}
                style={styles.tagBackground}>
                <View style={styles.tagContent}>
                  <Text
                    style={[styles.baseText, styles.titleText, {fontSize: 18}]}>
                    {'Photography'}
                  </Text>
                  <Text
                    style={[styles.baseText, styles.colorText, {fontSize: 14}]}>
                    {'10 Courses'}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.tag}>
              <ImageBackground
                source={require('./image/image4.png')}
                style={styles.tagBackground}>
                <View style={styles.tagContent}>
                  <Text
                    style={[styles.baseText, styles.titleText, {fontSize: 18}]}>
                    {'Business'}
                    {'\n'}
                    {'Photography'}
                  </Text>
                  <Text
                    style={[styles.baseText, styles.colorText, {fontSize: 14}]}>
                    {'7 Courses'}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  search: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
  tag: {
    height: 250,
    width: '48%',
    borderRadius: 20,
  },
  tagContent: {padding: 30},
  scrollViewContent: {
    paddingBottom: 50,
  },
  tagBackground: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 20,
    overflow: 'hidden',
  },
});
