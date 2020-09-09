import React from 'react'
import Todo from  "./Todo"

export default function TodoList({ todos, slashComplete, deleteTodo }) {
    //renders list of todos in array
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} slashComplete={slashComplete}
                deleteTodo={deleteTodo} //use for delete button
                />
            ))
                //map over todos
                //return todo component with todo passed in as prop
                //needs unique key attached to parent
            }
        </ul>
    )
}
