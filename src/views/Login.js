import React from 'react'
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native'
import {LabelTextField} from '../components/LabelTextFiel'
import styles from '../styles/Login'

const login_main_image = require("../images/login-1.png");
const lockIcon = require("../images/login1_lock.png");
const personIcon = require("../images/login1_person.png");

export default class Login extends React.Component{

    constructor(props) {
        super(props)

        this.state = { email: '', password: '', error: false, loading: false };

    }

    handleSubmit() {
        this.setState({loading: true});
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.login_main_image_view}>
                    <Image source={login_main_image} style={styles.login_main_image} resizeMode="contain" />
                </View>
                <View style={styles.wrapper}>
                    <LabelTextField
                        iconName={personIcon}
                        placeholder={"Username"}
                        value={this.state.email}
                        hasError={this.state.error}
                    />

                    <LabelTextField
                        iconName={lockIcon}
                        placeholder={"Password"}
                        autoCorrect={false}
                        value={this.state.password}
                        secureTextEntry
                    />

                    <TouchableOpacity activeOpacity={.5}>
                        <View>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText} onPress={
                                () => {
                                    if (!this.validateEmail(this.state.email)) {
                                        Alert.alert(
                                            'Attention',
                                            'L\'email renseigné est incorrect',
                                            [{text: 'OK'},],
                                            { cancelable: true }
                                        )

                                        // Je voudrai aussi que les bords du textInput rouge
                                        this.state.error = true;
                                    } else {
                                        // valid email
                                    }
                            }}

                            >Sign In</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <View style={styles.signupWrap}>
                        <Text style={styles.accountText}>Don't have an account?</Text>
                        <TouchableOpacity activeOpacity={.5}>
                            <View>
                                <Text style={styles.signupLinkText}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}







