import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  state = { value: 1 };

  increaseValue = () => {
    this.setState({ value: this.state.value + 1 });
  };

  descreaseValue = () => {
    if (this.state.value <= 0) {
      return;
    } else this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <button className='btn-increase' onClick={this.increaseValue}>
          +
        </button>
        <div>{this.state.value}</div>
        <button className='btn-decrease' onClick={this.descreaseValue}>
          -
        </button>
      </div>
    );
  }
}
