import React, { useState, useEffect } from 'react';
import './styles/icons.css'
import { Skills } from '../../types/cv'


export const LanguageIcon = ({ name }: Skills) => {
  const [Icon, setIcon] = useState<React.ElementType | null>(null);

  useEffect(() => {
    // Importación dinámica basada en la prop 'name'
    const importIcon = async () => {
      try {
        const { default: ImportedIcon } = await import(`../../icons/${name}`);
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

export const Icons = () => {
  return (
    <div>Icons</div>
  )
}

export const SocialIcon = ({social}) => {
    return (
        <div className='social-icon'>
            <img src={social} alt="social"/>
        </div>
    )
  }