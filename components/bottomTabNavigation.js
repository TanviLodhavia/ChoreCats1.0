import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import JobRequest from '../screens/jobRequest'
import MyCom from '../screens/myCom'

export const BottomNavigator = createBottomTabNavigator({
    JobRequest:{
        screen:JobRequest,
        navigationOptions :{
            tabBarIcon: <Image source={require('../images/JobTab.png')} style={{width:50, height: 50}}/>,
            tabBarLabel :'Request Job'
        }
    },
    MyCom:{
        screen:MyCom,
        navigationOptions :{
            tabBarIcon: <Image source={require('../images/Community.png')} style={{width:60, height: 60}}/>,
            tabBarLabel :'My Community'
        }
    }
})
