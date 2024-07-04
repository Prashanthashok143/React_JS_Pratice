import React, { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
    };
  }
  Changecolor = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    const backgroundColor = this.state.isToggled ? "lightgreen" : "lightcoral";
    return (
      <div  style={{ backgroundColor, padding: "20px" }}>
        {this.state.isToggled ? (
          <h1 style={{ backgroundColor: "red" }}>Helo world</h1>
        ) : (
          <h1 style={{ backgroundColor: "blue" }}>Helo world</h1>
        )}

        <button onClick={this.Changecolor}>
          {this.state.isToggled ? "Blue" : "Red"}
        </button>
      </div>
    );
  }
}
export default App;


export function Toggle() {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled); // Toggle the state
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <p>
        {isToggled ? (
          <h2 style={{ backgroundColor: "red" }}>hello</h2>
        ) : (
          <h2 style={{ backgroundColor: "blue" }}>hello</h2>
        )}
      </p>

      {isToggled ? (
        <button style={{ backgroundColor: "green" }} onClick={handleToggle}>
          Turn Off
        </button>
      ) : (
        <button style={{ backgroundColor: "yellow" }} onClick={handleToggle}>
          Turn On
        </button>
      )}
    </div>
  );
}



