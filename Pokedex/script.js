const poke_container=document.getElementById('poke-container')
const pokemon_count=150

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#e5b7eb',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_type=Object.keys(colors)


const fecthPokemon= async()=>{
    for(let i=1;i<=pokemon_count;i++)
    {
        await getPokemon(i)
    }
}

const getPokemon= async(id)=>{

    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const res=await fetch(url)
    const data=await res.json()
    createPokemonCard(data)
}

const createPokemonCard= (pokemon)=>{

    const card=document.createElement('div')
    card.classList.add('pokemon')
    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1)
    
    const poke_type=pokemon.types.map(type=>type.type.name)
    // console.log(poke_type)

    const type=main_type.find(x => poke_type.indexOf(x)>=0)
    console.log(type)

    card.style.backgroundColor=colors[type]

    card.innerHTML=`
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" >
    </div>
    <div class="info">
        <span class="number">#${pokemon.id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span> ${type}</span> </small>
    </div>
    `
    poke_container.appendChild(card)
}

fecthPokemon()

