import React from 'react'
import { Thumbnail } from '../atomic/Images';
import { PrincipalTitles } from '../atomic/Titles';
import logo from '../../assets/Miguedev/2.svg'
import './styles/hero.css'

export const Hero = () => {
  return (
  <div className='hero'>  
        <div className='presentacion'>
            <PrincipalTitles title="Hi everyone! My name is Miguel. I'm a Software Engineer, from México and welcome to Codeale." animation='vanished' fontSize='' color='main-color'/>
        </div>
        <div className="thumbnail-container">
          <Thumbnail image={logo} animation='revelacion' />
        </div>
  </div>

  )
}
