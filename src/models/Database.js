import * as firebase from "firebase";

class Database {

    static setUserName(userId, username) {

        let userPath = "/user/" + userId + "/details";

        return firebase.database().ref(userPath).set({
            username: username
        })

    }

    static getUserName(userId, callback) {

        let userPath = "/user/" + userId + "/details";

        firebase.database().ref(userPath).on('value', (snapshot) => {

            var username = "";

            if (snapshot.val()) {
                username = snapshot.val().username
            }

            callback(username)
        });
    }

}

module.exports = Database;