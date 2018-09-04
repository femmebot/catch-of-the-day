import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from '../AddFishForm/AddFishForm';
import EditFishForm from '../EditFishForm/EditFishForm';
import Login from '../Login/Login';
import base, { firebaseApp } from '../../base';

class Inventory extends Component {

  static propTypes = {
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

  state = {
    uid: null,
    owner: null
  };

  authHandler = async (authData) => {
    console.log(authData);
    // 1. Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeID, { context: this });
    console.log(store);
    // 2. Claim it if there is no owner
    if (!store.owner) {
      // save it as our own store
      await base.post(`${this.props.storeID}/owner`, {
        data: authData.user.uid
      });
    }
    // 3. Set the state of the inventory component to reflect the current user
    // set state local to this component rather than the App
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = (provider) => {
    // alert(provider);
    // e.g. authProvider = new firebase.auth.TwitterAuthProvider()
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    // previously we used firebase to connect to database on base.js
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    console.log('loggin out');
    await firebase.auth().signOut();
    this.setState( {uid: null});
  }

  render () {

    const logout = <button onClick={this.logout}>Log out</button>

    // 1. Check is they are logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}/>
    }

    // 2. Check if they are not the owner of that store
    if (this.state.uid !== this.state.owner) {
      return(
        <div>
          <p>Sorry, you are not the owner.</p>
          {logout}
        </div>
      )
    }

    // 3. They must be the owner; just render the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
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
