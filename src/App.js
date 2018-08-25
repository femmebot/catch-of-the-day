import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header/>
          <p>Fish</p>
          <p>Fish</p>
          <p>Fish</p>
          <p>Fish</p>
          <p>Fish</p>
          <h2>Inventory</h2>
          <h2>Order</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
