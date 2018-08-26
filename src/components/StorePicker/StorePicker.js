import React, { Component , Fragment } from 'react';
import { getFunName } from '../../helpers';

 class StorePicker extends Component {

   // bind method to component
   // constructor() {
   //   super();
   //   this.goToStore = this.goToStore.bind(this);
   // }

   myInput = React.createRef();

   // goToStore(event){
   //   // Stop form from submitting
   //   event.preventDefault();
   //   // get text from input
   //   console.log(this.myInput);
   //   // change page to /store/whatever-string-input
   // }

   goToStore = (event) => {
     // Stop form from submitting
     event.preventDefault();
     // get text from input
     const storeName = this.myInput.value.value;
     // change page to /store/whatever-string-input
     // check StorePicker object in console to see available methods
     this.props.history.push(`/store/${storeName}`);
   }

   render() {
     return (
       <Fragment>
         <form className="store-selector" onSubmit={ this.goToStore }>
           <h2>Please enter a Store</h2>
           <input
             type="text"
             ref={ this.myInput }
             required placeholder="Store Name"
             defaultValue={ getFunName() } />
           <button type="submit">Visit Store &rarr;</button>
         </form>
       </Fragment>
     )
   }
 }

export default StorePicker;
