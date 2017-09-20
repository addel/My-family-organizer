import * as firebase from "firebase";

export const setUserName =  (userId, username) => {

    let userPath = "/user/" + userId + "/details";

    return firebase.database().ref(userPath).set({
        username: username
    })

};