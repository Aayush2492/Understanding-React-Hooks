import React, { Component } from "react";

class ClassMouseEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }
  render() {
    return (
      <div>
        From class: X coordinate: {this.state.x} and Y coordinate:{" "}
        {this.state.y}
      </div>
    );
  }
}

export default ClassMouseEvent;
