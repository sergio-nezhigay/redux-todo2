import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { selectTodos } from "./todosSlice";

import "./TodoList.css";

const TodoList = () => {
  const { todos } = useSelector(selectTodos);

  const renderedListItems = todos.map(({ id, taskText, completed }) => (
    <TodoListItem key={id} id={id} taskText={taskText} completed={completed} />
  ));

  return (
    <>{!!todos.length && <ul className="todo-list">{renderedListItems}</ul>}</>
  );
};

export default TodoList;
