//IIFE containing pokemonList
let movieRepository = (function (){
  let movieList = [
      {
        name: 'Thor:Love and Thunder',
        rating: 6.7,
        type: ['action', 'comedy']
      },
      {
        name: 'Nope',
        rating: 7.5,
        type: ['sci-fi', 'horror']
      },
      {
        name: 'Bullet Train',
        height: 7.5,
        type: ['action', 'comedy']
      }
    ];

  function add(movie) {
    movieList.push(movie);
  }

  function getAll() {
    return movieList;
  }

  function showDetails(movie) {
    console.log(movie.name);
  }

  function addListItem(movie) {
    let movieListed = document.querySelector('.movie-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = movie.name;
    button.classList.add('movie-name');
    listItem.appendChild(button);
    movieListed.appendChild(listItem);
    button.addEventListener('click', showDetails(movie))
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

movieRepository.add({name: 'Top Gun: Maverick', rating: 8.6, type:['action', 'drama']});

//forEach loop to list the pokemonList
movieRepository.getAll().forEach(function(movie) {
  movieRepository.addListItem(movie);
});
