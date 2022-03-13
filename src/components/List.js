import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addList } from "../actions/list";

function List() {
  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  function handleListAdd() {
    const enteredFruit = prompt("Enter the name of fruit");

    if (!enteredFruit) {
      return;
    }

    dispatch(addList(enteredFruit));
  }

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleListAdd}>+</button>
    </>
  );
}

export default List;
