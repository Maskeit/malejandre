import React, { useState, useEffect } from 'react';
import './styles/icons.css'
import { Skills, Profile} from '../../types/cv'

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

export const SocialIcon = ({ network, url }: Profile) => {
  const [iconSrc, setIconSrc] = useState('');

  useEffect(() => {
    // Vite maneja los archivos estáticos con una sintaxis especial cuando se usan rutas dinámicas.
    // Asegúrate de que los nombres de archivo SVG coincidan con los valores 'network' y estén en el directorio correcto.
    const iconPath = `/icons/${network}.svg`;

    // Vite coloca los archivos estáticos en el directorio public durante el build, así que puedes referenciarlos directamente
    fetch(iconPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Could not find ${iconPath}`);
        return res.text();
      })
      .then((data) => setIconSrc(data))
      .catch(console.error); // Siempre es bueno tener un manejo de errores
  }, [network]);

  // Si iconSrc está vacío, muestra un placeholder o null
  if (!iconSrc) {
    return <div>Cargando ícono...</div>;
  }

  return (
    <a href={url} className='social-icon' target="_blank" rel="noopener noreferrer"><iconSrc/></a>
);
};