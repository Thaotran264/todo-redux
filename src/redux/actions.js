export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodo",
    payload: id,
  };
};
export const searchFilterchange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterchange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterchange = (priorities) => {
  return {
    type: "filters/priorityFilterchange",
    payload: priorities,
  };
};
