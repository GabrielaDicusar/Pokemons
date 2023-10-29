import React from 'react';
import Logo from '../assets/13-512x512.png'; 
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} />
      </div>
       
      <div className='rightSide'>
      <li>
          <Link to="/pokedex">PokeDex</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </div>
    </div>
  )
}

export default Navbar
