import React, { useEffect } from "react";

function Double(props) {
  const { doubleFunction, value } = props;

  useEffect(() => {
    console.log("here @ 7");
  }, [doubleFunction]);

  return <div>Double value = {doubleFunction(value)} </div>;
}

export default Double;
