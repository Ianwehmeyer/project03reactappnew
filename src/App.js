import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

function App() {
  const [todos, setTodos] =useState([]);
  // 
  //for reference - const [state, setState] = useState([]); state is array, because state is immutable use function to update array
  function firstTodo(todo) {
    //takes array and sends to todo list
    //note to self, props only pass down from parent components
    setTodos([todo, ...todos]);
  }
  
  return (
    <div className="App">
     <p>React Todo list goes here</p>
     <TodoForm firstTodo={firstTodo} />
     <TodoList todos={todos} />
    </div>
  );
}

export default App;
