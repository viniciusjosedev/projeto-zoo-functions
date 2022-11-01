const data = require('../data/zoo_data');

function func(animal) {
  const lista = [];
  const verific = data.species.find((elemento) => elemento.name === animal.specie);
  verific.residents.forEach((elemento, index) => {
    if (elemento.sex === animal.sex) {
      lista.push(elemento);
    }
  });
  return lista.length;
}

function countAnimals(animal = '') {
  if (animal.length === 0) {
    const di = {};
    const verific = data.species.map((elemento) => elemento.name);
    verific.forEach((elemento) => {
      di[elemento] = data.species.find((elemento2) => elemento2.name === elemento).residents.length;
    });
    return di;
  } if (Object.keys(animal).length === 1) {
    const verific = data.species.find((elemento) => elemento.name === animal.specie);
    return verific.residents.length;
  } return func(animal);
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
