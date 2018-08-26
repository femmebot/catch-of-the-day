import React, { Component } from 'react';
import Header from './Header/Header';
import Order from './Order/Order';
import Inventory from './Inventory/Inventory';


class App extends Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. make a copy of existing state
    const fishesCopy = {...this.state.fishes};
    // 2. add fish to fishes variable using timestamp to create unique key
    fishesCopy[`fish${Date.now()}`] = fish;
    // 3. update fishes state with new fish
    this.setState({
      fishes: fishesCopy
    })
    console.log(`Inventory contains ${Object.keys(this.state.fishes).length + 1} fish!`);
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;
