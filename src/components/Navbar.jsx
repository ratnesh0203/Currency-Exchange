import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar-main'>
        
        <div className="list-nav"><Link to='/'>Home</Link></div>
        <div className='list-nav'><Link to='/conversion'>Conversion Calculator</Link></div>
        <div className='list-nav'><Link to='/supported_curr'>Supported Currencies</Link></div>

    </div>
  )
}

export default Navbar
