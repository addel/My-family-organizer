import React from 'react';
import Firebase from './src/utlis/Firebase'
import {RootStackNavigator} from "./src/utlis/Router";
import { Provider } from 'react-redux'
import store from "./src/store";

export default class App extends React.Component {

  componentWillMount() {
    Firebase.initialise();
  }

  render() {
      const { navigation } = this.props;
        return (
            <Provider store={store}>
              <RootStackNavigator/>
            </Provider>

        )
  }
}
