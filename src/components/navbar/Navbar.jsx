import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h1>TaskLoop</h1>
        <ul>
            <li><Link to="/tasks">Tasks</Link> </li>
            <li><Link to="/form">Add A Task</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar