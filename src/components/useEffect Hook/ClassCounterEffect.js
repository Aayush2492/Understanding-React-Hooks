import React, { Component } from "react";

class ClassComponentEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Number of clicks: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Number of clicks: ${this.state.count}`;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassComponentEffect;
