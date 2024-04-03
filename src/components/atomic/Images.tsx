import React from 'react'
import './styles/images.css'
export const Thumbnail = ({ image, width, animation, addClass}) => {
    return (
        <img src={image} alt="Imagen de perfil" className={`thumbnail ${width} ${animation} ${addClass}`}/>
    );
  };

export const Image = ({src, addClass}) =>{
  return (
      <img src={src} className={`image ${addClass}`} alt="" />
  )
}

export const Logo = ({logo, width}) =>{

  return(
    <img src={logo} className={`logo ${width}`} alt="logo from codeale" />
  )

}