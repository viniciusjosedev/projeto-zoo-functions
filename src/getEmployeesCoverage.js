const data = require('../data/zoo_data');

function nameSolo({ name }) {
  const listaSpecies = [];
  const listaLocations = [];
  const find = data.employees.find((elemento) => elemento.firstName === name || elemento
    .lastName === name);
  if (find === undefined) {
    throw new Error('Informações inválidas');
  }
  find.responsibleFor.forEach((elemento) => {
    listaSpecies.push(data.species.find((elemento2) => elemento2.id === elemento).name);
    listaLocations.push(data.species.find((elemento2) => elemento2.id === elemento).location);
  });
  return { id: find.id,
    fullName: `${find.firstName} ${find.lastName}`,
    species: listaSpecies,
    locations: listaLocations };
}

function idSolo({ id }) {
  const nome = data.employees.find((elemento) => elemento.id === id);
  if (nome === undefined) {
    throw new Error('Informações inválidas');
  }
  return nameSolo({ name: nome.firstName });
}

function funcDefault() {
  const lista = [];
  data.employees.forEach((elemento) => {
    lista.push(nameSolo({ name: elemento.firstName }));
  });
  return lista;
}

function getEmployeesCoverage(dict) {
  if (dict === undefined) {
    return funcDefault();
  } if (Object.keys(dict).includes('name')) {
    return nameSolo(dict);
  } if (Object.keys(dict).includes('id')) {
    return idSolo(dict);
  }
}
// c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1

console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

module.exports = getEmployeesCoverage;
