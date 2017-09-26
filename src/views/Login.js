import React from 'react'
import {Text, View, TouchableOpacity, Alert} from 'react-native'
import {LabelTextField} from '../components/LabelTextFiel'
import styles from '../styles/Login'
import * as firebase from "firebase";


const lockIcon = require("../images/login1_lock.png");
const personIcon = require("../images/login1_person.png");

export default class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = { email: '', password: '', error: false, loading: false };

        /*this.handleSubmit = this.handleSubmit.bind(this);*/
        this.resetPassword = this.resetPassword.bind(this);
        this.handleFormSubmitWithRedux = this.handleFormSubmitWithRedux.bind(this);
    }

    componentWillMount() {

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

    handleFormSubmitWithRedux(props) {
        const { email, password } = props;

        this.props.signInUser({ email, password });
    }

    /*async handleSubmit() {

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

                const {navigate} = this.props.navigation.navigate('Home')

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
    };*/


    render(){
        const { navigate } = this.props.navigation;
        const { handleSubmit } = this.props;
        return(

            <View style={styles.container}>
                <View style={styles.login_main_image_view}>
                    <Text style={styles.titleViewText}>Homy Plus</Text>
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
                        hasError={this.state.error}
                        secureTextEntry
                    />

                    <TouchableOpacity activeOpacity={.5}>
                        <View>
                            <Text style={styles.forgotPasswordText} onPress={() => this.resetPassword() }>Forgot Password ?</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}>
                        <View style={[styles.button, styles.login]}>
                            <Text style={styles.buttonText} onPress={() => handleSubmit(this.handleFormSubmitWithRedux)} >Login</Text>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.5}>
                        <View style={[styles.button, styles.register]}>
                            <Text style={styles.buttonText} onPress={() => navigate('Register')} >Create Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}






