import React from 'react';
import LoginBox from './children/login_box';
import './login_page.css';

const loginBoxOptions = {
  boxWidth: 500,
  bodyPadding: 20,
  bodyColor: '#FFF',
  headerColor: '#81D4FA'
};

const LoginPage = (props) => (
  <LoginBox className="login-page" {...loginBoxOptions} >
    { props.children }
  </LoginBox>
);

export default LoginPage;
