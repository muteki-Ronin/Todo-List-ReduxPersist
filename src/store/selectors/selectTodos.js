// CONSTS
import { ALL, ACTIVE, COMPLETED } from "../consts/filtersConsts";

export const selectTodos = (store, filter) => {
  switch (filter) {
    case ALL:
      return store.todos;
    case ACTIVE:
      return store.todos.filter((todo) => todo.checked === false);
    case COMPLETED:
      return store.todos.filter((todo) => todo.checked === true);
    default:
      return store.todos;
  }
};

export const selectAllTodos = (store) => store.todos;
