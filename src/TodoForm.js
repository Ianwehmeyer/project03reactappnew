import React, {useState} from 'react'

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


   
    return (
        <div>
            <form>
                <input type="text" name="task" value={todo.task}  onChange={inputChange} />
                <button type="submit" >X</button>
            </form>
        </div>
    )
}
