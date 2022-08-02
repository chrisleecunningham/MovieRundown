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

//forEach loop to list the pokemonList
pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ': height(' + pokemon.height + '), ' +
  pokemon.type[0] + '/' + pokemon.type[1] + '<br>')
});
