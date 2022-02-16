import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const HomePage = () => (
        <div className="App">
            <small>ReactJS + Redux - HoanLN</small>
            <TodoInput />
            <TodoList />
        </div>
);

export default HomePage;