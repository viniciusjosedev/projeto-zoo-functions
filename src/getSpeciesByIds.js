const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length >= 1) {
    return ids.map((elemento) => data.species.find((elemento2) => elemento2.id === elemento));
  } return [];
}

module.exports = getSpeciesByIds;
