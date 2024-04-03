import React, {  useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../atomic/Images'
import logoCodeale from '../../assets/Miguedev/6.svg'
import { SocialLinks } from '../molecular/SocialLinks'
import './styles/sidebar.css'
export const Sidebar = ({ isActive, toggleSidebar}) => {

  const currentPath = window.location.pathname;
  const sidebarClass = `sidebar ${isActive ? 'active' : ''}`;
  return (
    <aside className={sidebarClass}>
      <nav className='sidebar-nav'>
        <div>        
          <div className='headbar'>
            <Logo logo={logoCodeale} width="four"/>
            <button onClick={toggleSidebar} className='p-1.5 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" 
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

          </div>

          <div className={`navbar-list ${isActive ? 'active' : ''}`}>
            <Link to="/" onClick={toggleSidebar}><button className={`navbar-button ${currentPath === '/' ? 'active' : ''}`}>Home</button></Link>
            <Link to="/About" onClick={toggleSidebar}><button className={`navbar-button ${currentPath === '/About' ? 'active' : ''}`}>About</button></Link>
            <Link to="/Projects" onClick={toggleSidebar}><button className={`navbar-button ${currentPath === '/Projects' ? 'active' : ''}`}>Projects</button></Link>
            <Link to="/Contact" onClick={toggleSidebar}><button className={`navbar-button ${currentPath === '/Contact' ? 'active' : ''}`}>Hire me!</button></Link>
          </div>        
        </div>

        <div className='social-links-container'>
          <SocialLinks/>
        </div>
      </nav>
    </aside>
  )
}

