import React from 'react';
import Firebase from './src/models/Firebase'
import Login from './src/views/Login';
import Register from "./src/views/Register";

export default class App extends React.Component {

  componentWillMount() {
    Firebase.initialise();
  }

  render() {
        return (
            <Register/>
        )
  }
}
