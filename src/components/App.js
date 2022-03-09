import React from "react";
import List from "./List";
import Welcome from "./Welcome";
import SpeedIndicator from "./SpeedIndicator";
import Click from "./Click";
import Hover from "./Hover";

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
        <h1>Number of fruits = {this.state.list.length} </h1>

        <List list={this.state.list} onAdd={this.handleListAdd} />
        <Click />
        <Hover />
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
