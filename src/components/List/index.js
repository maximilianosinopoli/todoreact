import React from "react";
import Item from "../Item";

function List({ todos }) {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item}>
            <Item text={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
