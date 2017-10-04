import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Alert} from 'react-native'
import {LabelTextField} from '../components/LabelTextFiel'
import styles from '../styles/Register'

import {connect} from 'react-redux';
import * as actions from "../actions/users";


const personIcon = require("../images/login1_person.png");
const lockIcon = require("../images/login1_lock.png");
const emailIcon = require("../images/signup_email.png");

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', password: '', name: '', error: false, loading: false };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

    }

    componentWillReceiveProps () {

        if (this.props.error.message != undefined){
            Alert.alert(
                'Attention',
                this.props.error.message,
                [{text: 'OK'},],
                { cancelable: true }
            );

            this.setState({
                error: true
            });
        }

        if(this.props.uid == 'redirection'){
            const {navigate} = this.props.navigation.navigate('Home')
        }else if(this.props.uid){
            this.props.setNameFirebase(this.state.name);
        }
    }


    handleSubmit() {

        this.setState({
            loading: true
        });

        if (this.state.email === '' && this.state.password === '' && this.state.name === '') {
            Alert.alert(
                'Attention',
                'Veuillez renseigner tout les champs !',
                [{text: 'OK'},],
                { cancelable: true }
            );

        } else {
            this.props.request(this.state.email, this.state.password);
        }
    };

    render() {
        const { navigate } = this.props.navigation;
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

                    <TouchableOpacity onPress={() => this.handleSubmit() }>
                        <View style={styles.signup}>
                            <Text style={styles.whiteFont}>Register</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.signin} onPress={() => navigate('Login')} >
                            <Text style={styles.greyFont}>Already have an account?
                                <Text style={styles.whiteFont}> Login</Text>
                            </Text>
                        </View>
                        <Text></Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

// ici on a ce qu'on appel des containers
// ça fait le lien entre le stoere et les props du component.
// ça définit des méthode qui dispatch des actions poiur update le state.


const mapStoreToProps = store => ({
    uid: store.user.user,
    error: store.user.error
});


const mapDispatchToProps = dispatch => ({
    request: ( email, password) => dispatch(actions.registerRequest( email, password)),
    setNameFirebase: (name) => dispatch(actions.registerNameRequest( name)),
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(Register)
