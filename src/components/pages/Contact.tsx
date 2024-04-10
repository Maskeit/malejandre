import React from 'react'
import './styles/Contacto.css'
import { SocialLinks } from '../molecular/SocialLinks'
import { Titles, Parragraph } from '../atomic/Titles'

export const Contact = () => {
  return (
    <div className='contacto'>
        <div className='info'>
          <div className='title'>
            <Titles text='Let us work together!' fontSize='fs-two' color='main-color' animation=''/>
          </div>
          <div className='contact-desc'>
            <Parragraph text='You can contact me by sending me an email to miguelagustin182@gmail.com or send me a message on LinkedIn.' color='main-color' fontSize='' animation=''/>
          </div>
        </div>
        <SocialLinks/>
    </div>
  )
}
