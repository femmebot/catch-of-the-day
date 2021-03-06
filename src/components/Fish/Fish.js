import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../helpers';

class Fish extends Component {

  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };

  // need to pass key w/c is stored as the index prop to addToOrder function
  // clickHandler = () => {
  //   this.props.addToOrder(this.props.index);
  // }

  render () {

    // use destructuring to assign this.props.fishDetails.--- to a variable and minimize typing
    const { image, name, price, desc, status } = this.props.fishDetails;

    // const isAvailable = this.props.fishDetails.status === 'available';
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
         {/* <img src={this.props.fishDetails.image} alt={this.props.fishDetails.name}/> */}
         {/* <h3 className="fish-name">{this.props.fishDetails.name}</h3> */}
         <img src={image} alt={name}/>
         <h3 className="fish-name">
           {name}
           <span className="price">{formatPrice(price)}</span>
         </h3>
         <p>{desc}</p>
         <button
           disabled={ !isAvailable }
           // onClick={this.clickHandler}
           onClick={() => this.props.addToOrder(this.props.index)}
           >
           { isAvailable ? 'Add to Cart!' : 'Sold Out' }
         </button>
      </li>
    )
  }
}

export default Fish;
