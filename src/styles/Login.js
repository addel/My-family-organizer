import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fc9d00"
    },
    login_main_image_view: {
        marginTop: 0,
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
    login_main_image: {
        width: null,
        height: null,
        flex: 1,
    },
    wrapper: {
        paddingVertical: 30,
        marginLeft:40,
        marginRight:40
    },
    button: {
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
        marginBottom: 20
    },
    login: {
        backgroundColor: "#006400",
    },
    register: {
        backgroundColor: "#4375e6",
    }
});