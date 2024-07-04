import React, { Component } from "react";

class MountsEx extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      count: 0,
    };
  }
  notVisible = () => {
    this.setState({ show: !this.state.show });
  };
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log("Component is ready to display");
  }
  componentDidUpdate() {
    console.log("DOM is Updated");
  }
  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <button onClick={this.notVisible} className="btn btn-danger">
          Show
        </button>
        <hr />
        <hr />

        <button onClick={this.Increment} className="btn btn-success">
          Increment
        </button>
        <h1>Counter Value :{this.state.count}</h1>
        <button onClick={this.Decrement} className="btn btn-warning">
          Decrement
        </button>
      </div>
    );
  }
}

export default MountsEx;

class Child extends Component {
  componentWillUnmount() {
    console.log("Removed from DOM");
  }
  render() {
    return (
      <>
        <h1>Hello Iam Visible</h1>
      </>
    );
  }
}
