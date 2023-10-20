import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {

  return (
    <div className='nav'>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/albums'><li>Albums</li></Link>
        <Link to='/users'><li>Users</li></Link>
        <Link to='/posts'><li>Posts</li></Link>
       
      </ul>
    </div>
  )
}

export default Navbar