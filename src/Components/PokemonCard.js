import React, {useState,useEffect} from 'react';

function PokemonCard({pokemon})  {
    const [imageUrl,setImageUrl ] = useState('');
    
    useEffect(() => {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(data => setImageUrl(data.sprites.front_default));
    }, [pokemon.url]);
    return(
        <div className="pokemon-card">
            <img src={imageUrl} alt={pokemon.name} />
            <h3>{pokemon.name}</h3> 
        </div>
    );
}

export default PokemonCard;