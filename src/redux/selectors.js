import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priorities.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText.toLowerCase());
      }
      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const todoReturn = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });

//   return todoReturn;
// };
// export const searchTextSelector = (state) => state.filters.search;
