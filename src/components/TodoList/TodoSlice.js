const initState = [
  {
    id: 1,
    name: "Learn React",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "Learn JS",
    completed: true,
    priority: "Low",
  },
  {
    id: 3,
    name: "Learn Antd",
    completed: false,
    priority: "High",
  },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
export default todoListReducer;
