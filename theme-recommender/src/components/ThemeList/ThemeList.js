import React, { Component } from 'react';

import Theme from 'components/Theme/Theme';

import './ThemeList.scss';

class ThemeList extends Component {
  constructor(props) {
    super(props);

    this.renderTheme = this.renderTheme.bind(this);
  }

  renderTheme({theme}, index) {
    return (
      <Theme key={index} theme={theme} />
    );
  }

  render() {
    const { themes } = this.props;

    return (
      <div className="theme-list">
        {
          themes.map(this.renderTheme)
        }
      </div>
    );
  }
}

export default ThemeList;
