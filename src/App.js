import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Form />
      </div>
    );
  }
}

export default App;
