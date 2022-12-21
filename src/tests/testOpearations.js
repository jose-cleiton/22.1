const { Operations } = require('../sum');

describe('Operations', () => {
  let operations;

  beforeEach(() => {
    operations = new Operations();
  });

  test('sum() should return the sum of two numbers', () => {
    expect(operations.sum(2, 3)).toBe(5);
    expect(operations.sum(-2, 3)).toBe(1);
    expect(operations.sum(0, 0)).toBe(0);
  });

  test('sub() should return the difference of two numbers', () => {
    expect(operations.sub(5, 3)).toBe(2);
    expect(operations.sub(-2, 3)).toBe(-5);
    expect(operations.sub(0, 0)).toBe(0);
  });

  test('mult() should return the product of two numbers', () => {
    expect(operations.mult(2, 3)).toBe(6);
    expect(operations.mult(-2, 3)).toBe(-6);
    expect(operations.mult(0, 5)).toBe(0);
  });

  test('div() should return the quotient of two numbers', () => {
    expect(operations.div(6, 3)).toBe(2);
    expect(operations.div(-6, 3)).toBe(-2);
    expect(() => operations.div(5, 0)).toThrow();
  });
});
