const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verific = data.species.find((elemento) => elemento.name === animal);
  return verific.residents.every((elemento) => elemento.age >= age);
}

module.exports = getAnimalsOlderThan;
