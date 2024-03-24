import React from 'react'
import './styles/Contacto.css'
import { SocialLinks } from '../molecular/SocialLinks'
import { TitlesH1, Parragraph } from '../atomic/Titles'
import { ContactButton } from '../atomic/Buttons'

export const Contact = () => {
  return (
    <div className='contacto'>
        <div className='info'>
          <div className='title'>
            <TitlesH1 text='Trabaja Conmigo!' />
            <Parragraph text='Puedes contactarme enviandome un correo a miguelagustin182gmail.com o enviame un mensaje por LinkedIn' />
          </div>
        </div>
        <div>
          <SocialLinks/>
        </div>
    </div>
  )
}
