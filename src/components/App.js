import React from "react";
import List from "./List";
import Welcome from "./Welcome";
import SpeedIndicator from "./SpeedIndicator";
import Click from "./Click";
import Hover from "./Hover";
import Calculator from "./Calculator";
import Heading from "./Heading";

// expression ? value1 : value2
// HP.getPrice(){    }
//

// function Book(name, page) {
//   this.name = name;
//   this.page = page;

//   this.calculatePrice = function (rate) {
//     return this.page * rate;
//   };
// }

// const HP = new Book("HP", 200);

// // Implicit Binding
// console.log(HP.calculatePrice(20));

// const peaterPan = {
//   page: 90,
// };

// // Explicit Binding
// console.log(HP.calculatePrice.call(peaterPan, 20));
// console.log(HP.calculatePrice.apply(peaterPan, [20]));

// const calculatePeaterPansPrice = HP.calculatePrice.bind(peaterPan);

// console.log(calculatePeaterPansPrice(20));

export const listContext = React.createContext("list");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: ["Apple", "Banana", "Mango", "Grapes"],
    };

    this.handleListAdd = this.handleListAdd.bind(this);
  }

  handleListAdd() {
    const enteredFruit = prompt("Enter the name of fruit");

    if (!enteredFruit) {
      return;
    }

    this.setState({ list: [...this.state.list, enteredFruit] });
  }

  render() {
    return (
      <React.Fragment>
        <Welcome name="World" />
        <SpeedIndicator />

        <listContext.Provider value={[this.state.list, this.handleListAdd]}>
          <Heading />
          <List />
        </listContext.Provider>

        <Click />
        <Hover />

        <Calculator>
          <h1>Hello </h1>
        </Calculator>
      </React.Fragment>
    );
  }
}

// handleListAdd();

//    APP
//     |  \
//    List Heading
//   /   \
// Items
//
// Ul   Li

export default App;
