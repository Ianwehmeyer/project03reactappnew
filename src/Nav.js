import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
                <li><Link to="/three">Three</Link></li>
            </ul>
        </nav>
    )
}
