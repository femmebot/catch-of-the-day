import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from '../AddFishForm/AddFishForm';
import EditFishForm from '../EditFishForm/EditFishForm';

class Inventory extends Component {

  static PropTypes = {
    fishes: PropTypes.object,
    key: PropTypes.string,
    index: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

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
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}/>
        ) }
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSampleFishes}>Load sample fishes</button>
      </div>
    );
  }
}

export default Inventory;
