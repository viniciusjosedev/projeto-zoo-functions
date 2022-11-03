const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours é uma função;', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });
  it('Verifica se quando passado nenhum valor retorna o esperado;', () => {
    const retorno = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(retorno).toEqual(getOpeningHours());
  });
  it('Verifica se quando passado o valor de horario fechado, retorna a string certa;', () => {
    expect('The zoo is closed').toEqual(getOpeningHours('Tuesday', '07:59-am'));
  });
});
