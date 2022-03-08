import React from "react";
import List from "./List";
import Welcome from "./Welcome";
import SpeedIndicator from "./SpeedIndicator";

// expression ? value1 : value2

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Welcome name="World" />
        <SpeedIndicator />
        <List list={["Apple", "Banana", "Mango", "Grapes"]} />
        <button onClick={() => prompt("Enter the name of fruit")}>+</button>
      </React.Fragment>
    );
  }
}

export default App;
