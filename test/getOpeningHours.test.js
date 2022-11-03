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
    const result = 'The zoo is closed';
    expect(result).toEqual(getOpeningHours('Tuesday', '07:59-am'));
    expect(result).toEqual(getOpeningHours('Tuesday', '06:00-am'));
    expect(result).toEqual(getOpeningHours('Monday', '09:00-am'));
  });
  it('Verifica se quando passado um valor de horario aberto, retorna a string correta;', () => {
    const result = 'The zoo is open';
    expect(result).toEqual(getOpeningHours('Tuesday', '08:00-am'));
    expect(result).toEqual(getOpeningHours('Tuesday', '05:59-pm'));
  });
  it('Verifica se apresenta o erro esperado quando passado hora/minuto inválida;', () => {
    expect(() => getOpeningHours('Tuesday', 'aa:00-am')).toThrow(/The hour should represent a number/);
    expect(() => getOpeningHours('Tuesday', '09:aa-am')).toThrow(/The minutes should represent a number/);
  });
  it('Verifica se apresenta o erro esperado quando passado abreviação diferente de am/pm;', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-aa')).toThrow(/The abbreviation must be 'AM' or 'PM/);
    expect(() => getOpeningHours('Tuesday', '09:00-am')).not.toThrow(/The abbreviation must be 'AM' or 'PM/);
  });
  it('Verifica se apresenta erro quando passado um dia que não existe;', () => {
    expect(() => getOpeningHours('day invalid', '09:00-am')).toThrow(/The day must be valid. Example: Monday/);
    expect(() => getOpeningHours('Tuesday', '09:00-am')).not.toThrow(/The day must be valid. Example: Monday/);
  });
});
