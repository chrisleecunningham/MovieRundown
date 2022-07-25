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

for (var i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5) {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!')
  } else {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
  }
}
