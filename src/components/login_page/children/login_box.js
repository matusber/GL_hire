import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import './login_box.css';

class LoginBox extends Component {
  render() {
    const { boxWidth, bodyPadding, headerColor, bodyColor } = this.props;
    const paperStyle = { width: boxWidth };
    const headerStyle = { backgroundColor: headerColor };
    const bodyStyle = { backgroundColor: bodyColor, padding: bodyPadding };
    return (
      <MuiThemeProvider>
        <Paper className="login-box" style={paperStyle} zDepth={2}>
          <header style={headerStyle} className="login-box__header">
            <img
              className="login-box__header-logo"
              src="../../../../assets/images/hiregl_logo.png"
              alt="application main logo"
            />
          </header>
          <form className="login-box__body" style={bodyStyle}>
            <fieldset>
              <input />
            </fieldset>
          </form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default LoginBox;
