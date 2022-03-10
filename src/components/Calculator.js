import React, { useEffect, useMemo, useState } from "react";

function Calculator() {
  const [dollar, setDollar] = useState(10);
  const [pound, setPound] = useState(10);

  const double = useMemo(() => {
    return doubleTheDollar(dollar);
  }, [dollar]);

  useEffect(() => {
    if (dollar > 10) {
      console.log("Dolor value exceded");
    }
  }, [dollar]);

  useEffect(() => {
    console.log("Empty Use State");
  }, []);

  return (
    <div>
      <h1>Calculator</h1>
      Enter $
      <input
        type="number"
        value={dollar}
        onChange={(e) => setDollar(e.target.value)}
      />
      <div>
        Enter Pound
        <input
          type="number"
          value={pound}
          onChange={(e) => setPound(e.target.value)}
        />
      </div>
      <div>Rupees = {dollar * 122}</div>
      <div>Euro = {dollar * 0.76 * 0.84}</div>
      <div>Double = {double}</div>
    </div>
  );
}

function doubleTheDollar(dollar) {
  for (let i = 0; i < 99999; i++) {
    for (let j = 0; j < 9999; j++) {}
  }

  return 2 * dollar;
}

export default Calculator;
