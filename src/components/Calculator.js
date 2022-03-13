import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

import Double from "./Double";

import "../assets/css/calculator.css";

function Calculator(props) {
  const [dollar, setDollar] = useState(10);

  console.log(props);

  const [rate, setRate] = useState(3);

  const dollarInput = useRef();
  const calculatorBody = useRef();

  const double = useMemo(() => doubleTheDollar(dollar), [dollar]);

  const doubleFunction = useCallback(
    (value) => doubleTheDollar(value, rate),
    [rate]
  );

  useEffect(() => {
    console.log("Use Effect 1");

    if (dollar > 10) {
      console.log("Dolor value exceded");
    }

    return () => {
      console.log("Return of use Effect");
    };
  }, [dollar]);

  useEffect(() => {
    console.log("Empty Use Effect");

    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  return (
    <div ref={calculatorBody}>
      <h1>Calculator</h1>
      Enter $
      <input
        ref={dollarInput}
        type="number"
        value={dollar}
        onChange={(e) => setDollar(e.target.value)}
      />
      <div>
        Enter Pound
        <input
          type="number"
          value={dollar * 0.9}
          onChange={(e) => setDollar(e.target.value / 0.9)}
        />
      </div>
      <div>Rupees = {dollar * 122}</div>
      <div>Euro = {dollar * 0.76 * 0.84}</div>
      <Double doubleFunction={doubleFunction} value={dollar} />
      <button onClick={() => calculatorBody.current.classList.toggle("dark")}>
        Change Theme
      </button>
      <button
        onClick={() => {
          dollarInput.current.focus();
        }}
      >
        Focus
      </button>
      {props.children}
    </div>
  );
}

function doubleTheDollar(dollar, rate) {
  // for (let i = 0; i < 99999; i++) {
  //   for (let j = 0; j < 9999; j++) {}
  // }

  return rate * dollar;
}

export default Calculator;
