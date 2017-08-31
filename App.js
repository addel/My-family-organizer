import React from 'react';
import firebase from 'firebase';
import Login from './src/views/Login';

export default class App extends React.Component {
  componentWillMount() {
      firebase.initializeApp({
          apiKey: 'AIzaSyB-_hIt-OmYnVRl08lT4J08uB8QRf2tSQo',
          authDomain: 'my-family-organizer-4242.firebaseapp.com',
          databaseURL: 'https://my-family-organizer-4242.firebaseio.com',
          projectId: 'my-family-organizer-4242',
          storageBucket: 'my-family-organizer-4242.appspot.com',
          messagingSenderId: '381775289631'
      });
  }
  render() {
        return (
            <Login/>
        )
  }
}
