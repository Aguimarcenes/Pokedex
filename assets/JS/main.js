

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>    

            <div class="detail"> 
                    <ol class="types">
                            <li class="type">Grass</li>
                            <li class="type">Poison</li>
                    </ol> 
                        
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">        
            </div>
        </li>
    `
}
const pokemonsList = document.querySelector('.pokemons')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

