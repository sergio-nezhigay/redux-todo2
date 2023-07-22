import { configureStore } from "@reduxjs/toolkit";

import { todosReducer } from "../features/tasks/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
