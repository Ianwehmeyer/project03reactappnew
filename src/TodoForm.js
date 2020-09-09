import React, { useRef } from 'react'
import { uuid } from 'uuidv4';







export default function TodoForm(props) {
    const taskRef = useRef();

    function handleClick(){     
        let id = uuid();
        let task = taskRef.current.value;
        let newTodo = {id: id, task: task, completed: false};
        props.addTodo( newTodo);
    }
    

    return (
        <div>
            <form>
                <input type="text" name="task" ref={taskRef} placeholder="Enter To Do's" />
                <button type="button" onClick={handleClick}>Enter</button>
            </form>
        </div>
    )
}
