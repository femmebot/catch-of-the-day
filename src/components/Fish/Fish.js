import React, { Component } from 'react';
import { formatPrice } from '../../helpers';

class Fish extends Component {

  render () {

    // use destructuring to assign this.props.fishDetails.--- to a variable and minimize typing
    const { image, name, price, desc, status } = this.props.fishDetails;

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
         <button>Add to Cart</button>

      </li>
    )
  }
}

export default Fish;
