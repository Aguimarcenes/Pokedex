

const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1'
try {
    fetch(url)
        .then(response => {
            const responseJson = response.json()
            return responseJson
        })
        .then(async data => {
            const pokemons = data.results
            for (const pokemon of pokemons){
              pokemon.data = await fetch(pokemon.url).then(res => res.json())
            }
            
            console.log(pokemons)
        })
        .catch(error => {
            console.error(error)
        })
} catch (error) {
    console.error(error)
}

