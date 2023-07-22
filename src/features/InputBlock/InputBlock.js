import React from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../tasks/todosSlice";

import "./InputBlock.css";

function InputBlock() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoAdded(e.target.item.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="item" placeholder="Add new task..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputBlock;
