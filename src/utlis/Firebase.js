import * as firebase from "firebase";

class Firebase {

    static initialise() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB-_hIt-OmYnVRl08lT4J08uB8QRf2tSQo',
            authDomain: 'my-family-organizer-4242.firebaseapp.com',
            databaseURL: 'https://my-family-organizer-4242.firebaseio.com',
            projectId: 'my-family-organizer-4242',
            storageBucket: 'my-family-organizer-4242.appspot.com',
            messagingSenderId: '381775289631'
        });
    }

}

module.exports = Firebase;