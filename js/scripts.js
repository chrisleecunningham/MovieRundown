//IIFE containing pokemonList
let pokemonRepository = (function (){
  let pokemonList = [
      {
        name: 'Wigglytuff',
        height: 1,
        type: ['fairy', 'normal']
      },
      {
        name: 'Slowbro',
        height: 1.6,
        type: ['psychic', 'water']
      },
      {
        name: 'Mr. Mime',
        height: 1.3,
        type: ['psychic', 'fairy']
      }
    ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({name: 'Paras', height: .3, type:['grass', 'bug']});

//forEach loop to list the pokemonList
pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + ': height(' + pokemon.height + '), ' +
  pokemon.type[0] + '/' + pokemon.type[1] + '<br>')
});
