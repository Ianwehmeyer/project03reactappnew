import React, {useState} from 'react'
import { uuid } from 'uuidv4';


//Renders form necessary to add Todo to list

export default function TodoForm( firstTodo ) {
    const [todo, setTodo] = useState({
        id: "",
        //string
        task: "",
        //string
        completed: false
        //boolean
    });

    function inputChange(e) {
        //takes event (state?) as parameter - use to update task property on todo 
        setTodo({...todo, task: e.target.value});

    }
    function doSubmit(e){
        //forms todo from state to list of todos
        //will take in event from DOM
        e.preventDefault();
        if (todo.task.trim()) {
            firstTodo({...todo, id: uuid.v4() })
            //new input?
            setTodo({ ...todo, task: "" })


        }

    }


   
    return (
        <div>
            <form onSubmit={doSubmit}>
                <input type="text" name="task" value={todo.task}  onChange={inputChange} />
                <button type="submit" >X</button>
            </form>
        </div>
    )
}
