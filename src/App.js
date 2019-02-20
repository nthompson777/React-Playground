import React from 'react'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}
export default App


/* import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import './assets/scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonToolbar>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </ButtonToolbar>;
      </div>,
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

export default App; */


