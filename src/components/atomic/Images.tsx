import React from 'react'
import './styles/images.css'
export const Thumbnail = ({ image }) => {
    return (
        <img src={image} alt="Imagen de perfil"/>
    );
  };

export const Image = ({src}) =>{
  return (
      <img src={src} className="image" alt="" />
  )
}

export const Logo = ({logo, width}) =>{

  return(
    <img src={logo} className={`logo ${width}`} alt="logo from codeale" />
  )

}