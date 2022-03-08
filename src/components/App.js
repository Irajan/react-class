import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;

    console.log(this.props);

    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <button onClick={this.handleIncrement}>+</button> {count}
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default App;
