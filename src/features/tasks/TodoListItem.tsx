import React from "react";
import { useDispatch } from "react-redux";

import { todoToggled } from "./todosSlice";
import { ITodoListItem } from "./interface";
import "./TodoListItem.css";

const TodoListItem: React.FC<ITodoListItem> = (props) => {
  const { id, taskText, completed } = props;
  const dispatch = useDispatch();

  const handleVote = (id: string) => {
    dispatch(todoToggled(id));
  };

  return (
    <li onClick={() => handleVote(id)} className={completed ? "doneTask" : ""}>
      <p>{taskText}</p>
    </li>
  );
};

export default TodoListItem;
