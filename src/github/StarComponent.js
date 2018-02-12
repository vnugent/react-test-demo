import React, { Component } from "react";
const FontAwesome = require("react-fontawesome");

class StarComponent extends Component {
  render() {
    return (
      <div className="stat-component star-component">
        <FontAwesome name="star" /> {this.props.starCount}
      </div>
    );
  }
}

export default StarComponent;
