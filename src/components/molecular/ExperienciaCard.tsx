import React from 'react'
import { Work } from '../../types/cv';
import './styles/experienciaCard.css'

// Utiliza la interfaz definida para tipar las props de tu componente
export const ExperienciaCard = ({ name, startDate, endDate, position, summary, highlights,thumb,logo }: Work) => {

  return (
    <div className="card">
      <img src={thumb} className="card-image" alt="" />

      <div className="card-overlay ">
        
        <div className="card-header">
          <svg className="card-arc" xmlns=""><path /></svg>                     
          <img className="card-thumb" src={logo} alt="" />
          <div className="card-header-text">
            <h3 className="card-title">{name}</h3>         
            <span className="card-status">{position}</span>
          </div>
        </div>

        <p className="card-description">{summary}</p>
      </div>
    </div>
  );
};