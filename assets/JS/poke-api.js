const pokeApi = {}

pokeApi.getPokemonsDetail = (pokemon) => {
    fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.results)
        .then((pokemons) => pokemons.map((pokeApi.getPokemonsDetail)))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
}
