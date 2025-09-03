import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './pokemonDetalle.css';

function PokemonDetalle() {
  const { nombre } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(res => res.json())
      .then(setPokemon);
  }, [nombre]);

  if (!pokemon) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando...</p>;

  return (
    <>
      <div className="background" />

      <main className="content-container" aria-label={`Detalles de ${pokemon.name}`}>
        <section className="pokemon-card" aria-live="polite">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h1 className="card-title">{pokemon.name.toUpperCase()}</h1>
        </section>

        <section className="review-container stats-outside" aria-label="Estadísticas del Pokémon">
          <p className="review-reviews">{pokemon.stats.length} stats</p>

          <div className="review-summary" role="region" aria-live="polite">
            <p className="review-score">{(pokemon.base_experience / 10).toFixed(1)}</p>
            <p className="review-text">Rating</p>
            <span className="review-separator" aria-hidden="true"></span>
          </div>

          <div className="stats-grid">
            {pokemon.stats.map(({ stat, base_stat }) => {
              const statNameMap = {
                hp: "HP",
                attack: "Ataque",
                defense: "Defensa",
                "special-attack": "Ataque Especial",
                "special-defense": "Defensa Especial",
                speed: "Velocidad",
              };
              const widthPercent = Math.min((base_stat / 150) * 100, 100);
              return (
                <dl className="stat-item" key={stat.name}>
                  <dt>{statNameMap[stat.name] || stat.name}</dt>
                  <dd>
                    <div className="stat-bar-bg" aria-hidden="true">
                      <div
                        className="stat-bar-fill"
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                    <span className="stat-value">{base_stat}</span>
                  </dd>
                </dl>
              );
            })}
          </div>
        </section>

        <Link to="/" className="link-button" aria-label="Volver a la lista de pokemones">
          <button className="card-button">Volver</button>
        </Link>
      </main>
    </>
  );
}

export default PokemonDetalle;
