import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Licenses from './Licenses'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Antenado
          </p>
          <Licenses/>
        </header>
        </div>
    );
  }
}

export default App;
