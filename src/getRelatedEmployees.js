const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.find((elemento) => elemento.managers.includes(id)) !== undefined;
}

function getRelatedEmployees(managerId) {
  const lista = [];
  if (isManager(managerId)) {
    data.employees.forEach((elemento) => {
      if (elemento.managers.includes(managerId)) {
        lista.push(`${elemento.firstName} ${elemento.lastName}`);
      }
    });
    return lista;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
console.log(getRelatedEmployees(stephanieId));

module.exports = { isManager, getRelatedEmployees };
