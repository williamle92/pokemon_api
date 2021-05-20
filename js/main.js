
//First things, first. Get the data from your form.
const getData = async (pokemon) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response);
    return response.data;
}

let form = document.querySelector('#pokeDataForm');


const loadPoke= async (event) => {
    event.preventDefault();
    let poke = document.getElementById('pokemon').value.toLowerCase()
    console.log(event)
    let data = await getData(poke)
    console.log(data)
    createPokeHTML(data)
}

const createPokeHTML = (pokemon) =>{
    let dataDisplay = document.getElementsByClassName('showPokemon')[0];
    dataDisplay.innerHTML = '';


    let pokeName = document.createElement('h2');
    pokeName.innerHTML = 'Name: ' + pokemon.name;
    dataDisplay.insertAdjacentElement('beforeend', pokeName);

    let pokeType = document.createElement('h4')
    pokeType.innerHTML = "Type: " + pokemon.types[0].type.name;
    dataDisplay.insertAdjacentElement('beforeend', pokeType);

    let pokeWeight = document.createElement('h4');
    pokeWeight.innerHTML = "Weight: " + pokemon.weight;
    dataDisplay.insertAdjacentElement('beforeend', pokeWeight)

    let pokeHeight = document.createElement('h4');
    pokeHeight.innerHTML = "Height: " + pokemon.height;
    dataDisplay.insertAdjacentElement('beforeend', pokeHeight)
    

    let pokeAbility = document.createElement('h4');
    pokeHeight.innerHTML = "Ability: " + pokemon.abilities[0].ability.name;
    dataDisplay.insertAdjacentElement('beforeend', pokeAbility)




    let pokeImg = document.createElement('img')
    pokeImg.src = pokemon.sprites.front_default;
    console.log(pokeImg);
    dataDisplay.insertAdjacentElement('beforeend', pokeImg)

    let pokeBackImg = document.createElement('img')
    pokeBackImg.src = pokemon.sprites.back_default;
    console.log(pokeBackImg);
    dataDisplay.insertAdjacentElement('beforeend', pokeBackImg)

    


}

form.addEventListener('submit', loadPoke);