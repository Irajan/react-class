import React from "react";

class MaxSpeedIndicator extends React.Component {
  componentDidMount = () => {
    console.log("Max Speed indicator component did mount");
  };

  render() {
    return <h3>Max Limit reached</h3>;
  }
}

class MinSpeedIndicator extends React.Component {
  componentDidMount = () => {
    console.log("Min Speed indicator component did mount");
  };

  render() {
    return <h3>Min Limit reached</h3>;
  }
}

class OnRangeSpeedIndicator extends React.Component {
  constructor() {
    super();

    this.state = {
      timerId: 0,
    };
  }

  // componentWillUnmount = () => {
  //   console.log(this.state.timerId);

  //   clearInterval(this.state.timerId);

  //   console.log("Range Speed Indicator Component will unmount");
  // };

  // componentDidMount = () => {
  //   const timerId = setInterval(() => {
  //     console.log("Interval");
  //   }, 2000);

  //   this.setState({ timerId });
  // };

  render() {
    return <h3>Speed on Range</h3>;
  }
}

class SpeedIndicator extends React.Component {
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

  speedIndicator = () => {
    if (this.state.count > 10) return <MaxSpeedIndicator />;

    if (this.state.count < 0) return <MinSpeedIndicator />;

    return <OnRangeSpeedIndicator />;
  };

  componentDidMount = () => {
    // Asynchronously API data fetch

    console.log("Component Did mount");
  };

  componentDidUpdate = (preProps, prevState) => {
    if (prevState.count > 10) {
      console.log("Speed out of range");
    }
  };

  // static getDerivedStateFromProps(props, state) {
  //   // return { count: props.name };
  // }

  shouldComponentUpdate = (preProps, prevState) => {
    console.log(this.state.count);

    if (this.state.count > 10) {
      return false;
    }

    return true;
  };

  render() {
    const { count } = this.state;

    return (
      <>
        {this.speedIndicator()}
        <button onClick={this.handleIncrement}>+</button> {count}
        <button onClick={this.handleDecrement}>-</button>
      </>
    );
  }
}

export default SpeedIndicator;
