import React from 'react'
import {View, Button} from 'react-native'
import {LabelTextField} from '../components/LabelTextFiel'
import loginStyles from '../styles/Login'

export default class Login extends React.Component{

    constructor(props) {
        super(props)
        this.state = { email: '', password: '', error: '', loading: false };
    }

    handleSubmit() {
        console.log(this.state);
        this.setState({loading: true});
        console.log(this.state);
    }

    render(){
        return(
            <View style={loginStyles.containerLogin}>
                <LabelTextField
                    label='Fucking mail'
                    value={this.state.email}
                    placeholder='test@test.test'
                    onChangeText={(email) => this.setState({ email })}
                />
                <LabelTextField
                    label='Password'
                    value={this.state.password}
                    placeholder='*******'
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button title="Connection" onPress={() => this.handleSubmit() } />
            </View>
        )
    }
}







