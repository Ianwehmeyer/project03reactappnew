import React from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import TodoStorage from './TodoStorage'
import Contacts from './Contacts'
import About from './About'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={TodoStorage}/>
          <Route path="/Contacts" exact component={Contacts} />
          <Route path="/About" exact component={About} />
          
        </Switch>
        
      </div>
    </BrowserRouter>
    </div>
  )
}

