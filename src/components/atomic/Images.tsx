import React from 'react'
import './styles/images.css'
export const Thumbnail = ({ image }) => {
    return (
      <div className='avatar-image'>
        {/* Usa `image` como el valor de la prop `src` */}
        <img src={image} alt="Imagen de perfil"/>
      </div>
    );
  };

export const Image = ({src}) =>{
  return (
      <img src={src} className="image" alt="" />
  )
}
