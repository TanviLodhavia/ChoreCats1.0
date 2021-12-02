import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import Login from './screens/login'

import Services from './screens/community/services/services'
import Events from './screens/community/events';
import Notice from './screens/community/notice';
import Clean from './screens/community/services/clean'

import {BottomNavigator} from './components/bottomTabNavigation'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Login:{screen: Login},
  Services:{screen: Services},
  Events:{screen: Events},
  Notice:{screen: Notice},
  Clean:{screen:Clean},
  BottomNavigator:{screen: BottomNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
