const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function verific(nome) {
  return data.species.find((elemento) => elemento.name === nome);
}

function animationSolo(nome) {
  const dict = verific(nome);
  return dict.availability;
}

function daySolo(nome) {
  if (nome !== 'Monday') {
    const animais = [];
    data.species.forEach((elemento) => {
      if (elemento.availability.includes(nome)) {
        animais.push(elemento.name);
      }
    });
    const nomes = `Open from ${data.hours[nome].open}am until ${data.hours[nome].close}pm`;
    return { [nome]: { officeHour: nomes, exhibition: animais } };
  } return { [nome]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
}

function funcDefault() {
  const dict = {};
  days.forEach((elemento) => {
    const resultado = daySolo(elemento);
    dict[elemento] = resultado[elemento];
  });
  return dict;
}

function getSchedule(scheduleTarget) {
  if (verific(scheduleTarget) !== undefined && !days.includes(scheduleTarget)) {
    return animationSolo(scheduleTarget);
  } if (days.includes(scheduleTarget)) {
    return daySolo(scheduleTarget);
  } return funcDefault();
}

module.exports = getSchedule;
