import React from 'react'
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native'
import {LabelTextField} from '../components/LabelTextFiel'
import styles from '../styles/Login'
import * as firebase from "firebase";

const login_main_image = require("../images/login-1.png");
const lockIcon = require("../images/login1_lock.png");
const personIcon = require("../images/login1_person.png");

export default class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = { email: '', password: '', error: false, loading: false };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }

    async resetPassword(){
        if(this.state.email == ''){
            Alert.alert(
                'Reset password',
                'Tape your email in email field and click on "Forgot Password?" button. ',
                [{text: 'OK'},],
                { cancelable: true }
            );
        }else{
            try {
                await firebase.auth().sendPasswordResetEmail(this.state.email);

            } catch (error) {
                Alert.alert(
                    'Warning',
                    error.toString(),
                    [{text: 'OK'},],
                    { cancelable: true }
                );
            }
        }
    }

    async handleSubmit() {

        this.setState({
            loading: true
        });

        if (this.state.email == '' && this.state.password == '') {
            Alert.alert(
                'Warning',
                'All field are required !',
                [{text: 'OK'},],
                { cancelable: true }
            );

            this.setState({
                error: true
            });

        } else {
            try {
                await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            } catch (error) {

                Alert.alert(
                    'Warning',
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


    render(){
        const { navigate } = this.props.navigation;
        return(

            <View style={styles.container}>
                <View style={styles.login_main_image_view}>
                    <Image source={login_main_image} style={styles.login_main_image} resizeMode="contain" />
                </View>
                <View style={styles.wrapper}>
                    <LabelTextField
                        iconName={personIcon}
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
                        secureTextEntry
                    />

                    <TouchableOpacity activeOpacity={.5}>
                        <View>
                            <Text style={styles.forgotPasswordText} onPress={() => this.resetPassword() }>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText} onPress={() => this.handleSubmit() }>Sign In</Text>
                </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <View style={styles.signupWrap}>
                        <Text style={styles.accountText}>Don't have an account?</Text>
                        <TouchableOpacity activeOpacity={.5}>
                            <View>
                                <Text style={styles.signupLinkText} onPress={() => navigate('Register')} >Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}







