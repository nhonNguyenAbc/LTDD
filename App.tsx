/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import MyComponent from './MyComponent';
import FlexComponent from './FlexComponent';
import Ex3 from './Ex3';
import Page1 from './baiTap/1/Page1';
import Page2 from './baiTap/2/Page2';
import Index from './StopWatch/Index';
import Stock from './API/Stock';
import Home from './movie/Home';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  return (
    <>
      <Index />
    </>
  );
}

export default App;
