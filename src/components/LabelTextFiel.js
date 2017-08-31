import React from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from '../styles/Styles'


const LabelTextField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label.toUpperCase()}</Text>
            <TextInput style={styles.inputStyle}
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText} />
        </View>
    );
};


export {LabelTextField};