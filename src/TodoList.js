import React from 'react'
import Todo from  "./Todo"

export default function TodoList({ todos }) {
    //renders list of todos in array
    return (
        <ul>
            {todos.map(todo =>(
                <Todo key={todo.id} todo={todo} />
            ))
                //map over todos
                //return todo component with todo passed in as prop
                //needs unique key attached to parent
            }
        </ul>
    )
}
