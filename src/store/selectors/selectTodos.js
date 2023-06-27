// CORE
import { createSelector } from "@reduxjs/toolkit";
// CONSTS
import { ALL, ACTIVE, COMPLETED } from "../consts/filtersConsts";

export const selectAllTodos = (store) => store.todos;
export const selectFilters = (store) => store.filter;
export const selectTodos = createSelector(
  [selectAllTodos, selectFilters],
  (allTodos, filters) => {
    switch (filters) {
      case ALL:
        return allTodos;
      case ACTIVE:
        return allTodos.filter((todo) => todo.checked === false);
      case COMPLETED:
        return allTodos.filter((todo) => todo.checked === true);
      default:
        return allTodos.todos;
    }
  }
);
export const selectTodosLength = (state, filter) => {
  switch (filter) {
    case ALL:
      return state.todos.length;
    case ACTIVE:
      return state.todos.filter((todo) => todo.checked === false).length;
    case COMPLETED:
      return state.todos.filter((todo) => todo.checked === true).length;
    default:
      return state.todos.length;
  }
};
