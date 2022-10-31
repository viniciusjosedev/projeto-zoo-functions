const data = require('../data/zoo_data');

let nome;

function func(elemento) {
  if (nome.length !== 0) {
    return elemento.firstName === nome || elemento.lastName === nome;
  }
}

function getEmployeeByName(employeeName) {
  nome = employeeName;
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(func);
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
