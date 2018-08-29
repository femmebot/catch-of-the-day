import React, { Component } from 'react';
import AddFishForm from '../AddFishForm/AddFishForm';
import EditFishForm from '../EditFishForm/EditFishForm';

class Inventory extends Component {
  render () {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        { Object.keys(this.props.fishes).map(key =>
          <EditFishForm
            key={key}
            index={key}
            name = {this.props.fishes[key].name}
            price = {this.props.fishes[key].price}
            status = {this.props.fishes[key].status}
            desc = {this.props.fishes[key].desc}
            image = {this.props.fishes[key].image}
            updateFish={this.props.updateFish}/>
        ) }
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSampleFishes}>Load sample fishes</button>
      </div>
    );
  }
}

export default Inventory;
