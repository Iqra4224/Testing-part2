
import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString function', function() {

  it('should return an empty string for null', function() {
    const result = toString(null);
    assert.equal(result, '');
  });

  it('should return an empty string for undefined', function() {
    const result = toString(undefined);
    assert.equal(result, '');
  });

  it('should return the string for a regular string', function() {
    const result = toString('hello');
    assert.equal(result, 'hello');
  });

  it('should return the stringified version of a number', function() {
    const result = toString(123);
    assert.equal(result, '123');
  });

  it('should handle negative zero correctly', function() {
    const result = toString(-0);
    assert.equal(result, '-0');
  });

  it('should handle regular zero correctly', function() {
    const result = toString(0);
    assert.equal(result, '0');
  });

  it('should convert arrays to a string representation', function() {
    const result = toString([1, 2, 3]);
    assert.equal(result, '1,2,3');
  });

  it('should convert nested arrays to a string representation', function() {
    const result = toString([1, [2, 3]]);
    assert.equal(result, '1,2,3');
  });

  it('should return the stringified version of boolean values', function() {
    const resultTrue = toString(true);
    const resultFalse = toString(false);
    assert.equal(resultTrue, 'true');
    assert.equal(resultFalse, 'false');
  });

  it('should convert symbols to their string representation', function() {
    const symbol = Symbol('test');
    const result = toString(symbol);
    assert.equal(result, symbol.toString());
  });

  it('should handle objects by converting them to string via `.toString()`', function() {
    const result = toString({ a: 1, b: 2 });
    assert.equal(result, '[object Object]');
  });

  it('should handle non-symbol objects correctly', function() {
    const result = toString({});
    assert.equal(result, '[object Object]');
  });

});
