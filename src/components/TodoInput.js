import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const handleSetTodoValue = (e) => {
    setTodoValue(e.target.value);
  };

  const addItem = () => {
    if(todoValue) {
      dispatch(
      addTodo({
        id: new Date().toLocaleString(),
        name: todoValue,
      })
    );
    setTodoValue("");
    }
  };


  return (
    <form>
      <input
        type="text"
        value={todoValue}
        onChange={handleSetTodoValue}
      ></input>
      <button type="button" onClick={addItem}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
