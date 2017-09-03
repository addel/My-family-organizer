import React, { Component } from 'react'
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native'
import {LabelTextField} from '../components/LabelTextFiel'
import styles from '../styles/Register'
import * as firebase from "firebase";

const backIcon = require("../images/back.png");
const personIcon = require("../images/login1_person.png");
const lockIcon = require("../images/login1_lock.png");
const emailIcon = require("../images/signup_email.png");

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', password: '', name: '', error: false, loading: false };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit() {

        this.setState({
            loading: true
        });

        if (this.state.email == '' && this.state.password == '') {
            Alert.alert(
                'Attention',
                'Veuillez renseigner tout les champs !',
                [{text: 'OK'},],
                { cancelable: true }
            );

            this.setState({
                error: true
            });

        } else {
            try {
                await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

            } catch (error) {

                Alert.alert(
                    'Attention',
                    error.toString(),
                    [{text: 'OK'},],
                    { cancelable: true }
                );

                this.setState({
                    error: true
                });
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>

                    <View style={styles.headerIconView}>
                        <TouchableOpacity style={styles.headerBackButtonView}>
                            <Image
                                source={backIcon}
                                style={styles.backButtonIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerTitleView}>
                        <Text style={styles.titleViewText}>Sign Up</Text>
                    </View>

                </View>

                <View style={styles.inputsContainer}>

                    <LabelTextField
                        iconName={personIcon}
                        placeholder={"Name"}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({name})}
                    />

                    <LabelTextField
                        iconName={emailIcon}
                        placeholder={"Email"}
                        value={this.state.email}
                        hasError={this.state.error}
                        onChangeText={(email) => this.setState({email})}
                    />

                    <LabelTextField
                        iconName={lockIcon}
                        placeholder={"Password"}
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry
                    />
                </View>

                <View style={styles.footerContainer}>

                    <TouchableOpacity>
                        <View style={styles.signup}>
                            <Text style={styles.whiteFont} onPress={() => this.handleSubmit() }>Register</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.signin}>
                            <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}