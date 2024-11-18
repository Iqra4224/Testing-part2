
import { expect } from 'chai';
import add from '../src/add.js';

describe('add function', () => {
  it('should return the sum of two positive numbers', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);  // Checks if the result is 10
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = add(6, -4);
    expect(result).to.equal(2);  // Checks if the result is 2
  });

  it('should return the sum of two negative numbers', () => {
    const result = add(-6, -4);
    expect(result).to.equal(-10);  // Checks if the result is -10
  });

  it('should return the sum of a number and zero', () => {
    const result = add(6, 0);
    expect(result).to.equal(6);  // Checks if the result is 6
  });

  it('should return 0 if both arguments are zero', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);  // Checks if the result is 0
  });

  it('should handle large numbers correctly', () => {
    const result = add(1000000, 5000000);
    expect(result).to.equal(6000000);  // Checks if the result is 6000000
  });
});
