import React from 'react'
import { Link } from 'react-router-dom'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className='logo'><AllInclusiveIcon/><span>TaskLoop</span></h1>
        <ul>
            <li><Link to="/tasks">Tasks</Link> </li>
            <li><Link to="/form">Add A Task</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar