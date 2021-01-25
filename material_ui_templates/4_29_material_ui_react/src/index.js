/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import SignIn from './signin';

// we now wrap App in a Provider
ReactDOM.render(
  // <Header />,
  // document.getElementById('main'),
  <SignIn />,
  document.getElementById('main'),
);
