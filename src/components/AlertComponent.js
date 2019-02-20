import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import '../assets/scss/App.scss';

class AlertComponent extends Component {
  render() {
    return (
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))
      
    );
  }
}

export default AlertComponent;
