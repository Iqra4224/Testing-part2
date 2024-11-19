import { expect } from 'chai';
import isObject from '../src/isObject.js'; 

describe('isObject function', () => {
  it('should return true for an object', () => {
    const result = isObject({});
    expect(result).to.equal(true); // Checks if the result is true
  });

  it('should return true for an array (which is considered an object)', () => {
    const result = isObject([1, 2, 3]);
    expect(result).to.equal(true); // Checks if the result is true
  });

  it('should return true for a function (which is also considered an object)', () => {
    const result = isObject(function() {});
    expect(result).to.equal(true); // Checks if the result is true
  });

  it('should return true for a regex (which is also considered an object)', () => {
    const result = isObject(/abc/);
    expect(result).to.equal(true); // Checks if the result is true
  });

  it('should return false for null', () => {
    const result = isObject(null);
    expect(result).to.equal(false); // Checks if the result is false
  });

  it('should return false for undefined', () => {
    const result = isObject(undefined);
    expect(result).to.equal(false); // Checks if the result is false
  });

  it('should return false for a string', () => {
    const result = isObject('string');
    expect(result).to.equal(false); // Checks if the result is false
  });

  it('should return false for a number', () => {
    const result = isObject(123);
    expect(result).to.equal(false); // Checks if the result is false
  });

  it('should return false for a boolean', () => {
    const result = isObject(true);
    expect(result).to.equal(false); // Checks if the result is false
  });

  it('should return false for a symbol', () => {
    const result = isObject(Symbol('symbol'));
    expect(result).to.equal(false); // Checks if the result is false
  });

  it('should return false for a BigInt', () => {
    const result = isObject(123n);
    expect(result).to.equal(false); // Checks if the result is false
  });
});
