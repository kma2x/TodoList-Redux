import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actions";

const reducer = (state = JSON.parse(localStorage.getItem("arrTodoListRedux")) ?? [], action) => {
  let newTodoList;
  switch (action.type) {
    case ADD_TODO:
      newTodoList = [...state];
      newTodoList.push(action.payload);
      localStorage.setItem("arrTodoListRedux", JSON.stringify(newTodoList));
      return newTodoList;
    case DELETE_TODO:
      newTodoList = [...state].filter((todo) => todo.id !== action.payload);
      localStorage.setItem("arrTodoListRedux", JSON.stringify(newTodoList));
      return newTodoList;
    case EDIT_TODO:
      newTodoList = [...state].map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
          todo.id = new Date().toLocaleString();
        }
        return todo;
      })
      localStorage.setItem("todoRedux", JSON.stringify(newTodoList))
      return newTodoList;

    default:
      return state;
  }
};

export default reducer;
