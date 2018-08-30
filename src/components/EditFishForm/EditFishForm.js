import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../helpers';

class EditFishForm extends Component {

static propTypes = {
  index: PropTypes.string,
  fish: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  }),
  deleteFish: PropTypes.func,
  updateFish: PropTypes.func
}
  onChangeHandler = (event) => {
    console.log(event.currentTarget.value);
    // update that fish
    // 1. Take a copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // console.log(updatedFish);
    // 2. need to create Index prop in order to access Key
    // this.props.updatedFish(key, updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  };


  render () {
    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.onChangeHandler} value={this.props.name}/>
        <input type="text" name="price" onChange={this.onChangeHandler} value={formatPrice(this.props.price)}/>
        <select name="status" onChange={this.onChangeHandler} value={this.props.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc" onChange={this.onChangeHandler} value={this.props.desc}></textarea>
        <input type="text" name="image" onChange={this.onChangeHandler} value={this.props.image}/>
        <button onClick={() => {this.props.deleteFish(this.props.index)}}>Remove Fish</button>
      </div>
    )
  };
}

export default EditFishForm;
