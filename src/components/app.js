import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import LoginPage from './login_page/login_page';
import { authUser, fetchLocations } from '../../API/fetch';

injectTapEventPlugin();

export default class App extends Component {
  componentWillMount() {
    authUser();
    fetchLocations().then(cities => console.log('cities: ', cities.data));
  }
  render() {
    return (
      <div className="app">
        <LoginPage />
      </div>
    );
  }
}
