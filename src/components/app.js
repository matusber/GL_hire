import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { authUser, fetchLocations } from '../../API/fetch';

injectTapEventPlugin();

export default class App extends Component {
  componentWillMount() {
    authUser();
    fetchLocations().then(cities => console.log('cities: ', cities.data));
  }
  render() {
    return (
      <MuiThemeProvider>
        <AppBar />
      </MuiThemeProvider>
    );
  }
}
