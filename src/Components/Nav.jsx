import React from 'react'
import "./styles/Nav.css"
import { useState } from 'react';

export default function Nav() {
  const [openCard, setOpenCard] = useState(false);

  const OpenCard = () =>{
    setOpenCard(!openCard)
  }
  return (
    <nav className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
      <div className="nav-title">
        <p style={{ color: 'yellow'}}>CORSAIR</p>
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <ul className="nav-list" >
    <label htmlFor="nav-check" className='navCheck'>

      <label htmlFor="nav-check" className='navCheck'>
      <li><a href="/signup">SignUp</a></li>
      </label>

      <label htmlFor="nav-check" className='navCheck'>
      <li><a href="/login">Join Us</a></li>
      </label>

     

    

     
      </label>
      
    </ul>
    
  </nav>
  )
}
