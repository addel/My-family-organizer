import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7b4ccc"
    },
    inputsContainer: {
        paddingVertical: 30,
        marginLeft:40,
        marginRight:40
    },
    headerIconView: {
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 60,
        marginLeft:40,
        marginRight:40,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center'
    },
    inputs: {
        paddingVertical: 20,
    },
    signup: {
        backgroundColor: '#00b7ff',
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
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