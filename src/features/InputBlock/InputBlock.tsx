import React from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../tasks/todosSlice";

import "./InputBlock.css";

function InputBlock() {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.target as HTMLFormElement;
    dispatch(todoAdded(inputElement.item.value));
    inputElement.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="item" placeholder="Add new task..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputBlock;
