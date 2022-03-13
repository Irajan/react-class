import React, { useContext } from "react";
import { listContext } from "./App";

function List() {
  const [list, onAdd] = useContext(listContext);

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onAdd}>+</button>
    </>
  );
}

export default List;
