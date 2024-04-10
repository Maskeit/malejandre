import React, { useState, useEffect } from 'react';
import './styles/icons.css'
import { Skills, Profile} from '../../types/cv'

import Linkedin from '../../icons/Linkedin';
import Github from '../../icons/Github';
import Gmail from '../../icons/Gmail';


// Objeto para mapear los nombres de red a los componentes SVG
const ICONS = {
  linkedin: Linkedin,
  github: Github,
  gmail: Gmail
}; 
export const LanguageIcon = ({ name }: Skills) => {
  const [Icon, setIcon] = useState<React.ElementType | null>(null);

  useEffect(() => {
    // Importación dinámica basada en la prop 'name'
    const importIcon = async () => {
      try {
        const { default: ImportedIcon } = await import(`../../icons/${name}.tsx`);
        setIcon(() => ImportedIcon); // Actualizar el estado con el componente importado
      } catch (err) {
        console.error(`No se pudo importar el icono: ${name}`, err);
        setIcon(null);
      }
    };

    importIcon();
  }, [name]);

  // Si no hay icono cargado, muestra un placeholder o null
  if (!Icon) {
    return <div>Cargando ícono...</div>;
  }

  // Renderizar el componente del icono importado
  return <Icon className="language-icon" />;
};




export const IconLanguage = ({ name }) =>{
  return(
    <img className="language-icon" src={`/icons/${name}.tsx`} alt={name}/>
  );
};




export const SocialIcon = ({ network, url }: Profile) => {
  const IconComponent = ICONS[network];
  if (!IconComponent) {
    // Puedes mejorar este mensaje para depuración
    console.error(`Icono no encontrado para la red: ${network}`);
    return <div>Icono no disponible</div>;
  }

  return (
    <div className='social-icon'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <IconComponent width="50" height="50" />
      </a>
    </div>
  );
};