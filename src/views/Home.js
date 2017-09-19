import React, { Component } from 'react'
import {View, Text} from 'react-native'
import * as firebase from "firebase";



export default class Home extends Component {

    async componentWillMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if(!user){
                const {navigate} = this.props.navigation.navigate('Login')
            }
        });
    }

    render() {
        return (
            <View>
                <Text>Hello fucking world</Text>
            </View>
        );
    }
}