import React from 'react';
import Firebase from './src/utlis/Firebase'
import {RootStackNavigatorn, SideMenuNavigator} from "./src/utlis/Router";

export default class App extends React.Component {

  componentWillMount() {
    Firebase.initialise();
  }

  render() {
      const { navigation } = this.props;
        return (
            <SideMenuNavigator/>
        )
  }
}
