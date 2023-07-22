import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, ITodosState } from "./interface";

const initialState: ITodosState = {
  todos: [
    {
      id: "1",
      taskText: "Go home",
      completed: false,
    },
    {
      id: "2",
      taskText: "Call someone",
      completed: true,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    todoAdded: {
      reducer(state, action: PayloadAction<ITodo>) {
        state.todos.push(action.payload);
      },
      prepare(taskText: string) {
        return {
          payload: {
            id: nanoid(),
            taskText,
            completed: false,
          },
        };
      },
    },
    todoToggled(state, action: PayloadAction<string>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

export const selectTodos = (state: { todos: ITodosState }) => state.todos;
