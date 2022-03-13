import React, { useContext } from "react";
import { listContext } from "./App";

function Heading() {
  const [list] = useContext(listContext);

  return <h1>No of fruits = {list.length}</h1>;
}

export default Heading;
