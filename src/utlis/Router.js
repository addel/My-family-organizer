import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Home from '../views/Home';
import Login from '../views/Login'
import Register from '../views/Register'

export const RootStackNavigator = StackNavigator({
    Home: {
        screen: Home,
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
