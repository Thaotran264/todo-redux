const initState = {
  value: 0,
};

// Reducers
//  la mot function nhan vao state, action
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};
// Action
const increment = {
  type: "todoList/increment",
};

// Action creators
const incrementCreator = (data) => {
  return {
    type: "todoList/increment",
    payload: data,
  };
};
// dispatch
// la mot function
