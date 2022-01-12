import React from "react";
import List from "../List";
import { useState } from "react";

function Form() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([
    "Cook something decent..",
    "Learn something new..",
    "Improve my React skills",
  ]);

  function onSubmit(e) {
    e.preventDefault();
    setTodos([...todos, newItem]);
    setNewItem("");
  }

  function updateInput(e) {
    setNewItem(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={updateInput} type="text" value={newItem} />
        <button>Click Me</button>
      </form>
      <List todos={todos} />
    </div>
  );
}

export default Form;
