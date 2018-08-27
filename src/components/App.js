import React, { Component } from 'react';
import Header from './Header/Header';
import Order from './Order/Order';
import Inventory from './Inventory/Inventory';
import sampleFishes from '../assets/sample-fishes';
import Fish from './Fish/Fish';


class App extends Component {

  // initialize state
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. make a copy of existing state
    const fishesCopy = {...this.state.fishes};
    // 2. add fish to fishes variable using timestamp to create unique key
    fishesCopy[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({
      fishes: fishesCopy
    })
    console.log(`Inventory contains ${Object.keys(this.state.fishes).length + 1} fish!`);
  };

  loadSampleFishes = () => {
    this.setState(
      {fishes: sampleFishes}
    );
    console.log(this.state.fishes);
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {/*{ Object.keys(this.state.fishes).map(key => <li key={key}> {key} </li>) }*/}
            { Object.keys(this.state.fishes).map ( key =>
              <Fish key={key} fishDetails={this.state.fishes[key]}/>
            ) }
          </ul>
        </div>
        <Order/>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
