const form = document.querySelector('#pokeform');


const getData = async (poke) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    console.log(response);
    return response.data;
}

const DOM_Elements = {
    pokemonList: '.pokemon-list'
}


const createList = (name, type, weight) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" name="${name}">${type} ${weight} </a>`;
    document.querySelector(DOM_Elements.pokemonList).insertAdjacentHTML('beforeend', html);

}
const loadData = async () => {
    const pokeMau = document.getElementsByClassName('pokemon-list')[0].childElementCount
    if (pokeMau){
        console.warn('You already have data')
    }else{
        const p = await getData(form);
        console.log(p);
        p.forEach((element) =>{
            createList(element.name, element.types[1][0], element.weight)
        });
    }
}


// form.addEventListener('submit', (event)=>{
//     event.defaultPrevented();
//     console.log(event);
//     let queryName = document.querySelector('#name');
