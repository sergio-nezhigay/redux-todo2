import React from "react";
import { useDispatch } from "react-redux";

import { todoToggled } from "./todosSlice";
import "./TodoListItem.css";

const TodoListItem = ({ id, taskText, completed }) => {
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(todoToggled(id));
  };

  return (
    <li onClick={() => handleVote(id)} className={completed ? "doneTask" : ""}>
      <p>{taskText}</p>
    </li>
  );
};

export default TodoListItem;
