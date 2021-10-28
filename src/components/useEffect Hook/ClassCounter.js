import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component mounted");
    this.interval = setInterval(this.tick, 1000); //Execute the tick function every second
  }

  componentWillUnmount() {
    console.log("Component unmounted");
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <div>From Class: {this.state.count}</div>;
  }
}

export default ClassCounter;
