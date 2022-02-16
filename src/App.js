import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TodoDetail from "./components/TodoDetail";
import HomePage from "./HomePage";

const App = () => {
  const todoList = useSelector((state) => state);
  return (
    <BrowserRouter>
      <div className="app">
        <Link to="/">
          <h3>TodoApp</h3>
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {todoList.map((todo) => {
            return (
              <Route
                path='/detail'
                key={todo.id}
                element={<TodoDetail id={todo.id} name={todo.name} />}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
