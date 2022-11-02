const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const find = data.species.find((elemento) => elemento.id === data.employees
    .find((elemento2) => elemento2.id === id).responsibleFor[0]).residents;
  const verificacao = find.map((elemento) => elemento.age).sort((a, b) => b - a)[0];
  return Object.values(find.find((elemento) => elemento.age === verificacao));
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
