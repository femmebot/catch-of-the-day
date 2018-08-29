import React, { Component } from 'react';
import Header from './Header/Header';
import Order from './Order/Order';
import Inventory from './Inventory/Inventory';
import sampleFishes from '../assets/sample-fishes';
import Fish from './Fish/Fish';
import base from '../base';


class App extends Component {

  // initialize state
  state = {
    fishes: {},
    order: {}
  };

componentDidMount(){
  // console.log('MOUNTED!');
  // destructure this.props.match.params
  const { params } = this.props.match;
  this.ref = base.syncState(`${params.storeID}/fishes`, {
    context: this,
    state: 'fishes'
  })
}

// unmount to prevent memory leakage
componentWillUnmount(){
  // console.log('UNMOUNTED!!!!');
  base.removeBinding(this.ref);
}

  addFish = (fish) => {
    // 1. make a copy of existing state
    const fishesCopy = {...this.state.fishes};
    // 2. add fish to fishes variable using timestamp to create unique key
    fishesCopy[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState(
      {fishes: fishesCopy}
    )
    console.log(`Inventory contains ${Object.keys(this.state.fishes).length + 1} fish!`);
  };

  updateFish = (key, updatedFish) => {
    // 1. take a copy of the current state
    const fishesCopy = {...this.state.fishes};
    // 2. update the copy with the updated fish
    fishesCopy[key] = updatedFish;
    // 3. set State
    this.setState(
      {fishes: fishesCopy }
    );
  }

  loadSampleFishes = () => {
    this.setState(
      {fishes: sampleFishes}
    );
    console.log(this.state.fishes);
  };

  addToOrder = (key) => {
    // 1. Make a copy of the order state
    const orderCopy = {...this.state.order};
    // 2. Add fish to order or increment to an existing order item
    orderCopy[key] = orderCopy[key] + 1 || 1;
    // 3. set state to update state
    this.setState(
      { order: orderCopy }
    )
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {/*{ Object.keys(this.state.fishes).map(key => <li key={key}> {key} </li>) }*/}
            {/* can't access key so we need to pass key as index prop */}
            { Object.keys(this.state.fishes).map ( key =>
              <Fish
                key={key}
                index={key}
                fishDetails={this.state.fishes[key]}
                addToOrder={this.addToOrder}/>
            ) }
          </ul>
        </div>
        {/* <Order {...this.state} /> */}
        <Order fishes={this.state.fishes} order={this.state.order }/>
        <Inventory
          addFish = {this.addFish}
          updateFish = {this.updateFish}
          loadSampleFishes = {this.loadSampleFishes}
          fishes = {this.state.fishes}/>
      </div>
    );
  }
}

export default App;
