import React from 'react'
import logo from "./NovaBank.png";
import './Index.css';

export const Index = () => {
  return (
    <header>
       
        <a href="/#" className='logoImg'>
            <img src={logo} alt="logo"  />
        </a>

        <nav className="menu">
            <a href="/#">Hacete Cliente</a>
            <a href="/#" class="sidebar-option">Ingresa a tu Banking</a>
        </nav>
        

        
    </header>
  )
}

export default Index;