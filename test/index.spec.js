let chai = require('chai');
let expect = chai.expect;
let card = require('../source/index');
describe('cardValidator', () => {
  it('Número de cartão Válido', () => {
    expect(card.cardValidator('5545130775741024')).to.equal(true);
  });
  it('Número de cartão Inválido!', () => {
    expect(card.cardValidator('52089277339001049')).to.equal(false);
  });
  it('Quantidade de número de cartão menor que o esperado!', () => {
    expect(card.cardValidator('51813986')).to.equal(false);
  });
  it('Ops! Sinto muito! Não é um Número!', () => {
    expect(card.cardValidator('aline')).to.equal(false);
  });
  it('Número de cartão Válido!', () => {
    expect(card.cardValidator('5300246104519884')).to.equal(true);
  });
  it('Ops! Sinto muito! Não é um Número!', () => {
    expect(card.cardValidator('Laboratoria')).to.equal(false);
  });
  it('Número de cartão Inválido!', () => {
    expect(card.cardValidator('558460458501491510')).to.equal(false);
  });    
  it('Número de cartão Inválido!', () => {
    expect(card.cardValidator('9999999999999999')).to.equal(false);
  });
  it('Número de cartão Inválido!', () => {
    expect(card.cardValidator('1111111111111111')).to.equal(false);
  });
  it('Ops! Não contamos espaços!', () => {
    expect(card.cardValidator('5139 9361 4452 7205')).to.equal(false);
  });
  it('Ops! Não pode ser vazio!', () => {
    expect(card.cardValidator(' ')).to.equal(false);
  });
  it('Número de cartão Válido', () => {
    expect(card.cardValidator('4485036425723640')).to.equal(true);
  });
});