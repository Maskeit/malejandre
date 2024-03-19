import React from 'react'
import './styles/buttons.css'
export const Buttons = () => {
  return (
    <div>Buttons</div>
  )
}

export const BackScroll = () => {

  const scrollToTop = () =>{

    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto asegura que el scroll sea suave
    });
  }

  return(
    <button className='scroll-btn' onClick={scrollToTop}>      
      
    </button>
  )
}