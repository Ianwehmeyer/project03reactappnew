import React from 'react'

export default function ToDo({todo}) {
    //renders todo from TodoList array
    //for reference - const [state, setState] = useState([]); 

    //check box
    //task
    //delete button
    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" />
            <li style={{color: "white", 
            textDecoration: todo.completed ? "line-through" : null}} > 
            {todo.task} </li>
            <button>Delete</button>
        </div>
    )
}
