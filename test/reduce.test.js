import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce', () => {
  it('should reduce an array to a single value', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it('should reduce an array without an accumulator', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).to.equal(6);
  });

  it('should reduce an object to a single value', () => {
    const result = reduce({ a: 1, b: 2, c: 3 }, (sum, value) => sum + value, 0);
    expect(result).to.equal(6);
  });

  it('should work with complex iterators for objects', () => {
    const result = reduce({ a: 1, b: 2, c: 3 }, (result, value, key) => {
      result[key] = value * 2;
      return result;
    }, {});
    expect(result).to.deep.equal({ a: 2, b: 4, c: 6 });
  });

  it('should return the accumulator when no iteration occurs', () => {
    const result = reduce([], (sum, n) => sum + n, 10);
    expect(result).to.equal(10);
  });

  it('should handle an array of objects and return grouped values', () => {
    const result = reduce(
      [{ value: 1 }, { value: 2 }, { value: 1 }],
      (result, obj) => {
        (result[obj.value] || (result[obj.value] = [])).push(obj);
        return result;
      },
      {}
    );
    expect(result).to.deep.equal({
      1: [{ value: 1 }, { value: 1 }],
      2: [{ value: 2 }],
    });
  });

  it('should return the initial accumulator value if collection is empty', () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).to.equal(0);
  });

  it('should handle objects with mixed values and accumulator', () => {
    const result = reduce(
      { a: 1, b: 2, c: 3 },
      (result, value, key) => {
        result[key] = value * 2;
        return result;
      },
      {}
    );
    expect(result).to.deep.equal({ a: 2, b: 4, c: 6 });
  });

  it('should return the original collection if accumulator is not provided', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).to.equal(6);
  });
});
