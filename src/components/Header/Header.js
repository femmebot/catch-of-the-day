import React, { Component , Fragment } from 'react';

class Header extends Component {

  render() {
    return (
      <Fragment>
        <header className="top">
          <h1>Catch of the Day</h1>
        </header>
        <h3 className="tagline"><span>Fresh Daily</span></h3>
      </Fragment>
    )
  }

}

export default Header;
