import React from 'react'
import {View, Image, TextInput} from 'react-native'
import styles from '../styles/LabelTextField'


const LabelTextField = ({ iconName, onChangeText, placeholder, secureTextEntry, hasError }) => {

    return (
        <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
                <Image source={iconName} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput
                placeholderTextColor="#FFF"
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                style={[styles.input, hasError && styles.errorTextStyle]}
            />
        </View>
    );
};


export {LabelTextField};