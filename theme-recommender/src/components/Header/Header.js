import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="icon-react" />
        <span>Theme Recommender</span>
    </div>
    );
  };
};

export default Header;
