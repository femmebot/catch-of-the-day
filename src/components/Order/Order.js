import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends Component {

  static PropTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object
  }

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    // Make sure fish exists/is loaded before we continue
    if (!fish) return null;

    if(!isAvailable) {

      return (
        <CSSTransition classNames="order" key={key} timeout={{ enter: 250, exit: 250}}>

            <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available.</li>

        </CSSTransition>
      )
    }

    return (
      <CSSTransition classNames="order" key={key} timeout={{ enter: 250, exit: 250}}>

          <li key={key}>
            <span class="orderItem">
              <TransitionGroup component="span" className="count">
                <CSSTransition classNames="count" key={count} timeout={{enter: 5000, exit: 5000}}>
                  <span>{count} </span>
                </CSSTransition>
              </TransitionGroup>
              { count > 1 ? "lbs" : "lb" } {fish.name}
            </span>

              <span className="cost">{formatPrice(count * fish.price)}</span>
              <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
          </li>

      </CSSTransition>
    );
  }

  render () {

    const orderIDs = Object.keys(this.props.order);

    // Reduce takes four args: The current value, previous value, current index, array you called reduce on
    const total = orderIDs.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
        return prevTotal + (count * fish.price);
      }

      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
        {/* <ul className="order"> */}
          {orderIDs.map(this.renderOrder)}
        {/* </ul> */}
        </TransitionGroup>

        {/*<ul>
           { orderIDs.map(key =>
            (
              <li>{key}</li>
            )
          ) }
        </ul>*/}
        <div className="total">
          <strong className="totalPrice">{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order;
