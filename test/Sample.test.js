import { expect } from 'chai';
import add from '../src/add.js'; // Use .js extension for ES module imports

describe('add() function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should return a negative number for negative inputs', () => {
    expect(add(-2, -3)).to.equal(-5);
  });
});