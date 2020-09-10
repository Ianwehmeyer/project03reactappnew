import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";

export default function Navbar() {
    return (
        
        <nav className="navbar" >
            
            <div className="navBarLinks">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars/>
                </Link>
                <ul className="ulTest">
                
                    <li><Link to="/">To Do List -</Link></li>
                    <li><Link to="/Contacts"> Contacts -</Link></li>
                    <li><Link to="/About"> About </Link></li>
                
                </ul>
            </div>
        </nav>
    )
}
