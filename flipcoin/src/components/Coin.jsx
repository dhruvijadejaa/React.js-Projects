import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img
          src={this.props.info.imgSrc}
          alt={this.props.info.side}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  }
}

export default Coin;