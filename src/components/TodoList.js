import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
    const todoList = useSelector(state => state);
    return (
        <ul>
            {
                todoList.map(todo => (
                    <TodoItem
                        key = { todo.id }
                        id = { todo.id }
                        name = { todo.name }
                    />
                    )
                )
            }
        </ul>
    )
}

export default TodoList
