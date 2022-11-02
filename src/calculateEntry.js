const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const dict = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((elemento) => {
    if (elemento.age < 18) {
      dict.child += 1;
    } if (elemento.age >= 18 && elemento.age < 50) {
      dict.adult += 1;
    } if (elemento.age >= 50) {
      dict.senior += 1;
    }
  });
  return dict;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'object' && Object.keys(entrants).length > 0) {
    const dict = [countEntrants(entrants)];
    return dict.reduce((acc, cur) => acc + (cur.adult * data.prices.adult)
  + (cur.child * data.prices.child) + (cur.senior * data.prices.senior), 0);
  } return 0;
}

module.exports = { calculateEntry, countEntrants };
