import React, { useState, useEffect } from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar-list ${!navbarVisible && 'header-hidden'}`}>
      <Link to={"/"}><button className='navbar-button'>Inicio</button></Link>
      <Link to={"/Projects"}><button className='navbar-button'>Projects</button></Link>
    </div>  
  );
};

