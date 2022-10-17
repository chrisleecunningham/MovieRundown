//IIFE containing pokemonList
let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20'


  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }



  function showDetails(pokemon) {
    let detailsContainer = document.querySelector('#details-container');

    detailsContainer.innerHTML = '';

    let details = document.createElement('div');
    details.classList.add('details');

    let closeButtonElement = document.createElement('button');

  closeButtonElement.classList.add('details-close');
  closeButtonElement.innerText = 'Close';

  closeButtonElement.addEventListener('click', hideDetails);

    let nameElement = document.createElement('h1');
    nameElement.innerText = pokemon.name;

    let typeElement = document.createElement('p');
    typeElement.innerText = pokemon.type;

    let sizeElement = document.createElement('p');
    sizeElement.innerText = pokemon.size;

  details.appendChild(closeButtonElement);
    details.appendChild(nameElement);
    details.appendChild(typeElement);
    details.appendChild(sizeElement);
    detailsContainer.appendChild(details);

    detailsContainer.classList.add('is-visible');

  detailsContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === detailsContainer) {
      hideDetails();
    }
  });

}

  function hideDetails() {
    let detailsContainer = document.querySelector('#details-container');
    detailsContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let detailsContainer = document.querySelector('#details-container');
    if (e.key === 'Escape' && detailsContainer.classList.contains('is-visible')) {
      hideDetails();
    }
  });


  function addListItem(pokemon) {
    let pokemonListed = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-name');
    listItem.appendChild(button);
    pokemonListed.appendChild(listItem);
    button.addEventListener('click', function() {
      showDetails(pokemon)
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList
  };




})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
