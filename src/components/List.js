import React from "react";

class List extends React.Component {
  render() {
    const { list, onAdd } = this.props;

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
}

export default List;
