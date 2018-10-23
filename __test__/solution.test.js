'use strict';

const BracketValidation = require('../src/solution');

describe('solution.js', () => {
  test('Return false for too little of brackets', () => {
    const result = BracketValidation('([{)');
    expect(result).toEqual(false);
  });
  test('Return false if its not a string', () => {
    const result = BracketValidation('hellooooooo');
    expect(result).toEqual(false);
  });
  test('Return false if uneven brackerts', () => {
    const result = BracketValidation('{}[][[]');
    expect(result).toEqual(false);
  });
});
