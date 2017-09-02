import React from 'react';
import Firebase from './src/models/Firebase'
import Login from './src/views/Login';

export default class App extends React.Component {

  componentWillMount() {
    Firebase.initialise();
  }

  render() {
        return (
            <Login/>
        )
  }
}
