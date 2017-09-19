import * as firebase from "firebase";

class Database {

    static setUserName(userId, username) {

        let userPath = "/user/" + userId + "/details";

        return firebase.database().ref(userPath).set({
            username: username
        })

    }
}

module.exports = Database;