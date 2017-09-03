import React from 'react'
import {View, Image, TextInput} from 'react-native'
import styles from '../styles/LabelTextField'


const LabelTextField = ({ iconName, placeholder, secureTextEntry, hasError, onChangeText }) => {

    return (
        <View style={[styles.inputWrap, hasError && styles.errorTextStyle]}>
            <View style={styles.iconWrap}>
                <Image source={iconName} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput style={styles.input}
                placeholderTextColor="#FFF"
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                onChangeText={onChangeText}
            />
        </View>
    );
};


export {LabelTextField};