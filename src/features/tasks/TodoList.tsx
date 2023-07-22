import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

import { selectTodos } from "./todosSlice";
import { ITodo } from "./interface";

import "./TodoList.css";

const TodoList = () => {
  const { todos } = useSelector(selectTodos);

  const renderedListItems = todos.map(({ id, taskText, completed }: ITodo) => (
    <TodoListItem key={id} id={id} taskText={taskText} completed={completed} />
  ));

  return (
    <>
      {todos.length > 0 && <ul className="todo-list">{renderedListItems}</ul>}
    </>
  );
};

export default TodoList;
