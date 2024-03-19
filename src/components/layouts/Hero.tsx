import React from 'react'
import { Thumbnail } from '../atomic/Images';
import { PrincipalTitles } from '../atomic/Titles';
import { ScrollItem } from '../atomic/Buttons';
import avatar from '../../assets/miguel_04.png';
import './styles/hero.css'

export const Hero = () => {
  return (
  <div className='hero'>  
        <div className="thumbnail-container">
          <Thumbnail image={avatar} />
        </div>
        <div className='presentacion'>
            <PrincipalTitles title="MigueDev"/>
            <p className="parrafo">
            Hola, soy <strong>Miguel Alejandre</strong>, Ingeniero de Software especializado en crear soluciones innovadoras a través de aplicaciones web, móviles y de inteligencia artificial, incluyendo PLN y reconocimiento de imágenes, con habilidades destacadas en gestión y dirección de equipos.
            </p>
        </div>
  </div>

  )
}
