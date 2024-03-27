import React from 'react'
import './styles/titles.css'

export const PrincipalTitles = ({title}) => {
  return (
    <span className='principal-title'>
      {title}
    </span>
  )
}

export const TitlesH1 = ({text, fontSize, vanished}) => {
    return(
      <span className={`h1-title ${fontSize} ${vanished}`}>
        {text}
      </span>
    )
}

export const Parragraph = ({text}) =>{
  return (
        <span className='parrafos'>
          {text}
        </span>
  ) 
}