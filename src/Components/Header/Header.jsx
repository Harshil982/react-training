import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='nav mx-3' >
        <NavLink to="/"  >Posts</NavLink>
        <NavLink to="/createNote">Notes</NavLink>
    </div>
  )
}

export default Header