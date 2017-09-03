import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5e00cc"
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: 50,
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 25,
        height: 25,
    },
    backButtonIcon: {
        width: 25,
        height: 25
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: 25
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff',
    },
    inputs: {
        paddingVertical: 20,
    },
    signup: {
        backgroundColor: '#00b7ff',
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    signin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
});