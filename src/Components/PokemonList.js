import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';

function PokemonList(){
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=8')
        .then(response => response.json())
        .then(data => setPokemonList(data.results));
    }, []);
    return (
        <div className='pokemon-list'>
            {pokemonList.map((pokemon, index)=>(
                <PokemonCard key={index} pokemon={pokemon} /> 
            ))}
        </div>
            );
            
}
export default PokemonList;

