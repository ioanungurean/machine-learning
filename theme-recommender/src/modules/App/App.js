import React, { Component } from 'react';

import Header from 'components/Header/Header';
import ThemeRating from 'components/ThemeRating/ThemeRating';
import ThemeList from 'components/ThemeList/ThemeList';

import { predictThemes } from "utils";

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [],
    };

    this.getNewPredictions = this.getNewPredictions.bind(this);
  }

  componentDidMount() {
    this.setState({
      themes: predictThemes(),
    });
  }

  getNewPredictions() {
    this.setState({
      themes: predictThemes(),
    });
  }

  render() {
    return (
      <div className="app">
        <Header />

        <div className="app_main">
          <ThemeRating getNewPredictions={this.getNewPredictions}/>
          <ThemeList themes={this.state.themes}/>
        </div>
      </div>
    );
  }
}

export default App;
