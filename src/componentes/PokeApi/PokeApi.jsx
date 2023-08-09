import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const PokeApi = () => {
    const [id, setId] = useState (1)
    const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, id)

    const handleSiguiente = () => setId(id + 1)
    const handleAnterior = () => setId (id - 1)

return (
    <div className="container my-5">
        <h2>PokeApi</h2>
        <hr />
        {
            pokemon &&
                <div>
                    <h4>{pokemon.name}</h4>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
        }

        <button onClick={handleAnterior} className="btn btn-primary mx-1">Anterior</button>
        <button onClick={handleSiguiente} className="btn btn-primary mx-i">Siguiente</button>
        
    </div>
)
}