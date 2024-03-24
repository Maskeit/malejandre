import React from 'react'
import './styles/titles.css'

export const PrincipalTitles = ({title}) => {
  return (
    <span className='principal-title'>
      {title}
    </span>
  )
}

export const TitlesH1 = ({text}) => {
    return(
      <span className='h1-title'>
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