import React, { Component } from 'react';
import Rating from 'react-rating';

import Theme from 'components/Theme/Theme';

import { generateRandomTheme, saveTrainingData } from "utils";

import './ThemeRating.scss';

class ThemeRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: generateRandomTheme(),
    };

    this.rateTheme = this.rateTheme.bind(this);
  }

  componentDidMount() {
    this.setState({
      theme: generateRandomTheme(),
    });
  }

  rateTheme(rating) {
    saveTrainingData(this.state.theme, rating)

    this.setState({
      theme: generateRandomTheme(),
    });

    this.props.getNewPredictions()
  }

  render() {
    return (
      <div className="theme-rating">
        <p className="title">How good does this theme looks?</p>
        <Theme theme={this.state.theme} />
        <Rating start={-1} stop={4} onClick={this.rateTheme} />
      </div>
    );
  };
};

export default ThemeRating;
