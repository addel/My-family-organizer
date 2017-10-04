import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputWrap: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 75,
    },
    iconWrap: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    errorTextStyle: {
        borderWidth: 1,
        borderColor: "red",
        borderBottomColor: "red"
    }
});