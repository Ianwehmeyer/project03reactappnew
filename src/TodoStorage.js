import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from "./TodoList" 
import TodoForm from "./TodoForm"




const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function TodoStorage() {
  const [todos, setTodos] =useState([]);
  // 
  //for reference - const [state, setState] = useState([]); state is array, because state is immutable use function to update array

  function addTodo(todo) {
    //forms todo from state to list of todos
    //will take in event from DOM
    //e.preventDefault();         
    let newTodos = [...todos];
    setTodos([todo, ...newTodos])
  }
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
    //now todos are consistent when we reset the browser
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) 
    
  },[todos])

  function slashComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
    //filter removes items from the array - want to remove items if the id is not the one I'm looking for
    //filter uses function to determine whether or not to keep item in an array :)
  }

  return (
    <div className="TodoStorage">
    <TodoForm addTodo={addTodo}  todos={todos} />
    <TodoList todos={todos} slashComplete={slashComplete} 
    deleteTodo={deleteTodo} />
  </div>
  
);
}

export default TodoStorage;