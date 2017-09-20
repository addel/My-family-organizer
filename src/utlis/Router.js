import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Home from '../views/Home';
import Login from '../views/Login'
import Register from '../views/Register'
import MyCalendar from '../views/MyCalendar'
import Settings from '../views/Settings'
import {Image} from "react-native";

const calIcon = require("../images/tabBarCal.png");
const homeIcon = require("../images/tabBarHome.png");
const settingsIcon = require("../images/tabBarSettings.png");

export const TabBarBottomNavigator = TabNavigator({
    MyCalendar:{
        screen: MyCalendar,
        navigationOptions: {
            tabBarIcon: <Image source={calIcon}/>
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: <Image source={homeIcon}/>
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: <Image source={settingsIcon}/>
        }
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#3b5998',
        inactiveTintColor: '#cc6e08',
        showIcon: true,
        showLabel: true,
        iconStyle: {
            width: 15,
            height: 15
        },
        style: {
            backgroundColor: 'white'
        },
        pressColor: '#cccccc',
        indicatorStyle: {
            backgroundColor: '#cc3195'
        }
    }
});

export const RootStackNavigator = StackNavigator({
        Home: {
            screen: TabBarBottomNavigator,
        },
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        }
    }, {
        headerMode: 'none'
    }
);

