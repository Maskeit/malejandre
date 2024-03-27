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
            <TitlesH1 text='Let us work together!' fontSize='fs-two-mid'/>
            <TitlesH1 text={`You can contact me by sending me an email to miguelagustin182@gmail.com or send me a message on LinkedIn.`} fontSize='fs-one'/>
          </div>
        </div>
        <SocialLinks/>
    </div>
  )
}
