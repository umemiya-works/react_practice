import './App.css'
import { useStore } from './stores/store'
import CountButton from './components/CountButton'
import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

type Pokemon = {
  name: string
  image: string
}

function App() {
  const { count, increase, decrease } = useStore(state => ({
    count: state.count,
    increase: state.increase,
    decrease: state.decrease
  }))

  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  function randomNumber() {
    return Math.floor(Math.random() * 1025) + 1;
  }

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`);
      const data: Pokemon = {
        name: res.data.name,
        image: res.data.sprites.front_default
      }
      if(!ignore) {
        setPokemon(data);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div className="card">
        <h2>count: {count}</h2>
        <CountButton method={increase} title="increase"/>
        <CountButton method={decrease} title="decrease"/>
      </div>
      <div>
        {pokemon && (
          <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        )}
      </div>
      <div>
        <Link to="/about">
          About
        </Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
