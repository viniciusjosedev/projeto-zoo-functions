const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se é uma função', () => {
    expect('function').toEqual(typeof handlerElephants);
  });
  it('Verifica se retorna null quando o valor não é passado', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Verifica se emite uma mensagem sobre o valor passado ser diferente de uma string', () => {
    const resultado = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(12)).toEqual(resultado);
    expect(handlerElephants(14)).toEqual(resultado);
    expect(handlerElephants(14)).toEqual(resultado);
  });
  it('Verifica se o valor passado é uma chave existente no objeto', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });
  it('Verifica quantos elefantes existentes há no zoológico', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica se a lista de nomes de elefantes estão certas quando passado como valor a string nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se retorna null quando o valor passado não existe', () => {
    expect(handlerElephants('a')).toEqual(null);
  });
  it('Verifica se retorna o valor certo;', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});
