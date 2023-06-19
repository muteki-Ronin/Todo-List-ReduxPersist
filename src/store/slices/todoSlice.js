// CORE
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload,
        checked: false,
        edit: false,
      };
      return [...state, newTodo];
    },
    checkedTodo(state, action) {
      const newState = state.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
      return newState;
    },
    editTodo(state, action) {
      const newState = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title, edit: !todo.edit }
          : todo
      );
      return newState;
    },
    deleteTodo(state, action) {
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    },
    deleteAllTodo() {
      return initialState;
    },
  },
});

export const { addTodo, checkedTodo, editTodo, deleteTodo, deleteAllTodo } =
  todos.actions;
export default todos.reducer;
