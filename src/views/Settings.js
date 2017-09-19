import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from '../styles/Settings'
import * as firebase from "firebase";
import * as Database from "../models/Database";


const connectIcon = require("../images/connectSetting.png");
const exitIcon = require("../images/exitSetting.png");

export default class Settings extends Component {

    constructor(props) {
        super(props);


        this.logout = this.logout.bind(this);
        this.testFirebase = this.testFirebase.bind(this);
    }

    async logout() {

        try {
            await firebase.auth().signOut();

            // const {navigate} = this.props.navigation.navigate('Login')

        } catch (error) {
            console.log(error);
        }

    }

    async testFirebase() {
        try {

            let user = await firebase.auth().currentUser;

            Database.setUserName(user.uid, user.displayName);

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleViewText}>Homy Plus</Text>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity activeOpacity={.5}>
                        <View style={[styles.button, styles.connect]}>
                            <Image source={connectIcon} resizeMode="contain" />
                            <Text style={styles.buttonText}>Connect Google Calendar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.5}>
                        <View style={[styles.button, styles.connect]}>
                            <Image source={connectIcon} resizeMode="contain" />
                            <Text style={styles.buttonText}>Connect iCal</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.5}>
                        <View style={[styles.button, styles.exit]}>
                            <Image source={exitIcon} resizeMode="contain" />
                            <Text style={styles.buttonText} onPress={() => this.logout() }>Leave my home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}>
                        <View style={{marginTop: 10}}>
                            <Text onPress={() => this.testFirebase() }>Test Firebase</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}