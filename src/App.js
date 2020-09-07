import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] =useState([]);
  // 
  //for reference - const [state, setState] = useState([]); state is array, because state is immutable use function to update array
  return (
    <div className="App">
     <p>React Todo list goes here</p>
    </div>
  );
}

export default App;
