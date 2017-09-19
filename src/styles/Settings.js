import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        paddingVertical: 30,
        marginLeft:40,
        marginRight:40
    },
    button: {
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    titleWrapper: {
        marginTop: 0,
        marginLeft:40,
        marginRight:40,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleViewText: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center'
    },
    connect: {
        backgroundColor: "#a1a09b",
    },
    exit: {
        backgroundColor: "#e63529",
    }
});