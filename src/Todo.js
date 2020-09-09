import React from 'react'

export default function ToDo({todo, slashComplete, deleteTodo }) {
    //renders todo from TodoList array
    //for reference - const [state, setState] = useState([]); 
    function checkBoxClick() {
        slashComplete(todo.id);
    }
    //check box
    //task

    function deleteTodoClick(){
        deleteTodo(todo.id)
    }
    //delete button


    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" onClick={checkBoxClick} />
            <li style={{color: "black", 
            textDecoration: todo.completed ? "line-through" : null}} > 
            {todo.task} </li>
            <button onClick={deleteTodoClick}>Delete</button>
        </div>
    )
}
