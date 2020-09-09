import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        
        <nav className="Navbar" >
            <div>Possible Hamburger button - do later</div>
            <div>
                <ul>
                
                    <li><Link to="/">To Do List</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                
                </ul>
            </div>
        </nav>
    )
}
