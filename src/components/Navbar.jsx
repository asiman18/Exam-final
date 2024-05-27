import React from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";


function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className='nav__div'>
          <h4>FOUNDATION</h4>
        </div>
        <ul className='Text__ul'>
          <Link to='/' className='directior'>Home</Link>
          <Link to='/admin' className='directior'>Admin</Link>
          <Link to='/favorites' className='directior'>Favorites</Link>
          <li>About</li>
          <li>Discover</li>
          <li>Donate</li>
          <li>Blog</li>
          <li>Contact</li>
          <CiMenuBurger style={{display: 'none'}}/>
        </ul>
      </nav>
    </>
  )
}

export default Navbar