import './App.css';
import { useEffect, useState } from 'react';
import Pokemon from './pokemon';
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(0);

  function siguiente() {
    setOffset(offset + 8);
  }

  function anterior() {
    if (offset > 0) setOffset(offset - 8);
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${offset}`;
    fetch(URL)
      .then((res) => res.json())
      .then(setData);
  }, [offset]);

  return (
    <>
      <div className="background-radial" />
      
      <div className="app-container">
        <h1 className="title">Pokemones</h1>
        {data ? (
          <>
            <ul className="grid-pokemones">
              {data.results.map((pokemon) => (
                <li key={pokemon.name}>
                  <Link to={`/pokemonDetalle/${pokemon.name}`}>
                    <Pokemon nombre={pokemon.name} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="contenedor-botones">
              <button onClick={anterior} disabled={offset <= 0}>
                Anterior
              </button>
              <button onClick={siguiente}>Siguiente</button>
            </div>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}

export default App;
