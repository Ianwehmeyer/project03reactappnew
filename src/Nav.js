import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        
        <nav className="Navbar" >
            
            <div className="navBarLinks">
                <ul className="ulTest">
                
                    <li><Link to="/">To Do List</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                    <li><Link to="/About">About</Link></li>
                
                </ul>
            </div>
        </nav>
    )
}
