import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Alert} from 'react-native'
import {LabelTextField} from '../components/LabelTextFiel'
import styles from '../styles/Register'


const personIcon = require("../images/login1_person.png");
const lockIcon = require("../images/login1_lock.png");
const emailIcon = require("../images/signup_email.png");

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', password: '', name: '', error: false, loading: false };

        /*this.handleSubmit = this.handleSubmit.bind(this);*/
        this.handleFormSubmitWithRedux = this.handleFormSubmitWithRedux.bind(this);

    }

    componentWillMount() {
        this.props.clearState();
    }

    handleFormSubmitWithRedux(props) {
        const { email, password, firstname, lastname } = props;

        this.props.signUpUser({ email, password, firstname, lastname });
    }


    /*async handleSubmit() {

        this.setState({
            loading: true
        });

        if (this.state.email === '' && this.state.password === '') {
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

                firebase.auth().onAuthStateChanged((user, that = this) => {

                    if (user && that.state.name !== '') {
                        user.updateProfile({
                            displayName: this.state.name
                        }).then(function(that) {
                            console.log("ok pour add name " + that.state.name)
                        }).catch(function(error) {
                            console.log(error)
                        });
                    }
                });

                const {navigate} = this.props.navigation.navigate('Home')

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
    };*/

    render() {
        const { navigate } = this.props.navigation;
        const { handleSubmit } = this.props;
        return (
            <View style={styles.container}>
                <View >

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
                        hasError={this.state.error}
                    />

                    <TouchableOpacity>
                        <View style={styles.signup}>
                            <Text style={styles.whiteFont} onPress={handleSubmit(this.handleFormSubmit)}>Register</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.signin}>
                            <Text style={styles.greyFont}>Already have an account?
                                <Text style={styles.whiteFont} onPress={() => navigate('Login')} > Login</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

