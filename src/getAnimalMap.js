const data = require('../data/zoo_data');

const order = ['NE', 'NW', 'SE', 'SW'];

function funcDefault(options) {
  const dict = { NE: [], NW: [], SE: [], SW: [] };
  order.forEach((elemento) => {
    data.species.forEach((elemento2) => {
      if (elemento === elemento2.location) return dict[elemento].push(elemento2.name);
    });
  });
  return dict;
}

function complementDefault(lista, sexo) {
  const lista2 = [];
  if (sexo === 'female' || sexo === 'male') {
    lista.forEach((elemento) => {
      if (elemento.sex === sexo) lista2.push(elemento.name);
    });
    return lista2.map((elemento3) => elemento3[0].toUpperCase() + elemento3.slice(1)
      .toLowerCase());
  } return lista.map((elemento3) => elemento3.name[0].toUpperCase() + elemento3.name.slice(1)
    .toLowerCase());
}

function verificacao(ordenado, sexo, elemento2) {
  if (ordenado === false) {
    return complementDefault(elemento2.residents, sexo);
  } return complementDefault(elemento2.residents, sexo).sort();
}

function includeSoTrue(ordenado = false, sexo = false) {
  const dict = { NE: [], NW: [], SE: [], SW: [] };
  order.forEach((elemento) => {
    data.species.forEach((elemento2) => {
      if (elemento === elemento2.location) {
        dict[elemento].push({ [elemento2.name]: verificacao(ordenado, sexo, elemento2) });
      }
    });
  });
  return dict;
}

function controller(options) {
  const verific = Object.keys(options);
  if (verific.includes('sorted') && verific.length === 2) {
    return includeSoTrue(true);
  } if (verific.includes('sex') && verific.length === 2) {
    return includeSoTrue(false, options.sex);
  } return includeSoTrue(true, options.sex);
}

function getAnimalMap(options = undefined) {
  if (options === undefined || !Object.keys(options).includes('includeNames')) {
    return funcDefault();
  } if (Object.keys(options).includes('includeNames') && Object.keys(options)
    .length === 1) return includeSoTrue();
  return controller(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
