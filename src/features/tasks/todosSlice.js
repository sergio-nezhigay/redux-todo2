import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
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
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(taskText) {
        return {
          payload: {
            id: nanoid(),
            taskText,
            completed: false,
          },
        };
      },
    },
    todoToggled(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

export const selectTodos = (state) => state.todos;
