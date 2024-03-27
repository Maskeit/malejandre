import React from 'react'
import { Image } from '../atomic/Images'
import './styles/myhistorycard.css'
export const MyHistoryCard = ({src,text}) => {
  return (
    <div className='image-container'>
        <Image src={src}/>
        <span className='text-overlay'>{text}</span>
    </div>
  )
}
