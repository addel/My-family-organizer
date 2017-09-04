import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

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

export const SideMenuNavigator = DrawerNavigator({
    RootStackNavigator: {
            screen: RootStackNavigator,
            navigationOptions: {
                drawer: {
                    icon: () => (
                        <Image
                            source={require('../images/home.png')}
                            style={[styles.tabIcon, {tintColor: 'black'}]}
                        />
                    )
                }
            }
        },
    }
);