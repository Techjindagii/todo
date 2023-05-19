import { createSlice } from "@reduxjs/toolkit";

type todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo: todo) => todo.id !== action.payload
      );
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo: todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
