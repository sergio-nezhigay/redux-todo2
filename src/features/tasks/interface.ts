export interface ITodo {
  id: string;
  taskText: string;
  completed: boolean;
}

export interface ITodoListItem extends ITodo {
  key: string;
}

export interface ITodosState {
  todos: ITodo[];
}
