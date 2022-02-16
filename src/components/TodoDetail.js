import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/actions';

const TodoDetail = (todo) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(todo.name);
  const [editable, setEditable] = useState(false);
  const handleEditName = (e) => {
    setName(e.target.value);
  };

  const handleUpdateName = () => {
    dispatch(
      editTodo({
        ...todo,
        name: name,
      })
    );
    if (editable) {
      console.log(name)
      setName(name);
    }
    setEditable(!editable);
  };

  return (
    <li>
      {editable ? (
        <input type="text" value={name} onChange={handleEditName} />
      ) : (
        <>
          <span>{todo.name}</span>
          <span>{todo.id}</span>
        </>
      )}
      <div>
        <button onClick={handleUpdateName}>
          {editable ? "Update" : "Edit"}
        </button>

        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoDetail;