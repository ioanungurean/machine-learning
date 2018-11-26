import React, { Component } from 'react';

import './Theme.scss';

class Theme extends Component {
  constructor(props) {
    super(props);

    this.getColor = this.getColor.bind(this);
    this.getBackground = this.getBackground.bind(this);
  }

  getBackground(color) {
    return {
      backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
    };
  }

  getColor(color) {
    return {
      color: `rgb(${color.r}, ${color.g}, ${color.b})`
    };
  }

  render() {
    const { theme } = this.props;

    return (
      <section style={this.getBackground(theme.background)} className="theme">
        <div className="line">
          <span style={this.getColor(theme.color1)}>import</span>
          <span style={this.getColor(theme.color2)}>React</span>
          <span style={this.getColor(theme.color3)} className="no-padding">,</span>
          <span style={this.getColor(theme.color4)}>{ `{` }</span>
          <span style={this.getColor(theme.color2)}>Component</span>
          <span style={this.getColor(theme.color4)}>{ `}` }</span>
          <span style={this.getColor(theme.color1)}>from</span>
          <span style={this.getColor(theme.color5)}>'react'</span>
          <span style={this.getColor(theme.color3)} className="no-padding">;</span>
          <div className="empty" />
        </div>
        <div className="line">
          <span style={this.getColor(theme.color1)}>import</span>
          <span style={this.getColor(theme.color5)}>'./Theme.scss'</span>
          <span style={this.getColor(theme.color3)} className="no-padding">;</span>
          <div className="empty" />
        </div>
        <div className="line">
          <span style={this.getColor(theme.color6)}>class</span>
          <span style={this.getColor(theme.color7)}>Theme</span>
          <span style={this.getColor(theme.color6)}>extends</span>
          <span style={this.getColor(theme.color7)}>Component</span>
          <span style={this.getColor(theme.color4)}>{ `{` }</span>
        </div>
        <div className="line indent1">
          <span style={this.getColor(theme.color8)}>render</span>
          <span style={this.getColor(theme.color9)} className="no-padding">()</span>
          <span style={this.getColor(theme.color4)}>{ `{` }</span>
        </div>
        <div className="line indent2">
          <span style={this.getColor(theme.color1)}>return</span>
          <span style={this.getColor(theme.color4)}>{ `(` }</span>
        </div>
        <div className="line indent3">
          <span style={this.getColor(theme.color10)}>{ `<` }</span>
          <span style={this.getColor(theme.color5)} className="no-padding">section</span>
          <span style={this.getColor(theme.color2)}>className</span>
          <span style={this.getColor(theme.color11)}>=</span>
          <span style={this.getColor(theme.color5)}>"theme"</span>
          <span style={this.getColor(theme.color10)} className="no-padding">{ `>` }</span>
        </div>
        <div className="line indent4">
          <span style={this.getColor(theme.color11)}>Theme</span>
        </div>
        <div className="line indent3">
          <span style={this.getColor(theme.color10)}>{ `</` }</span>
          <span style={this.getColor(theme.color5)} className="no-padding">section</span>
          <span style={this.getColor(theme.color10)} className="no-padding">{ `>` }</span>
        </div>
        <div className="line indent2">
          <span style={this.getColor(theme.color4)}>{ `)` }</span>
          <span style={this.getColor(theme.color3)} className="no-padding">;</span>
        </div>
        <div className="line indent1">
          <span style={this.getColor(theme.color4)}>{ `}` }</span>
          <span style={this.getColor(theme.color3)} className="no-padding">;</span>
        </div>
        <div className="line">
          <span style={this.getColor(theme.color4)}>{ `}` }</span>
          <span style={this.getColor(theme.color3)} className="no-padding">;</span>
          <div className="empty" />
        </div>
        <div className="line">
          <span style={this.getColor(theme.color1)}>export</span>
          <span style={this.getColor(theme.color1)}>default</span>
          <span style={this.getColor(theme.color2)}>Theme</span>
          <span style={this.getColor(theme.color3)} className="no-padding">;</span>
        </div>
      </section>
    );
  };
};

export default Theme;
