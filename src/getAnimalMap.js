const data = require('../data/zoo_data');

const dict = { NE: [], NW: [], SE: [], SW: [] };

const order = ['NE', 'NW', 'SE', 'SW'];

function funcDefault(options) {
  order.forEach((elemento) => {
    data.species.forEach((elemento2) => {
      if (elemento === elemento2.location) return dict[elemento].push(elemento2.name);
    });
  });
  return dict;
}

function complementDefault(lista) {
  return lista.map((elemento3) => elemento3.name);
}

function includeTrue() {
  order.forEach((elemento) => {
    data.species.forEach((elemento2) => {
      if (elemento === elemento2.location) {
        dict[elemento].push({ [elemento2.name]: complementDefault(elemento2.residents) });
      }
    });
  });
  return dict;
}

function getAnimalMap(options = undefined) {
  if (options === undefined || !Object.keys(options).includes('includeNames')) {
    return funcDefault();
  } if (Object.keys(options).includes('includeNames')) return includeTrue();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
