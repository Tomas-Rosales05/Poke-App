
import React, { useState, useEffect } from 'react';
import './pokemos.css'; 

const Pokemon = ({ nombre }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(res => res.json())
      .then(setData);
  }, [nombre]);

  if (!data) return <p>Cargando {nombre}...</p>;

  return (
    <div className='container-pokemon'>
      <img className='poke-img' src={data.sprites.front_default} alt={data.name} />
      <h1 className='nombre-pokemon'>{data.name}</h1>
    </div>
  );
};

export default Pokemon;
