import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import { AppRegistry } from 'react-native';

export default createStackNavigator({
  Home: {
    screen: Splash
  },
});
