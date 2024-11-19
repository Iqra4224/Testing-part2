import { expect } from 'chai';
import map from '../src/map.js';  

describe('map function', function () {
  it('should return a new array with mapped values', function () {
    const input = [4, 8];
    const result = map(input, (x) => x * x);
    expect(result).to.deep.equal([16, 64]);
  });

  it('should return an empty array if input is empty', function () {
    const input = [];
    const result = map(input, (x) => x * 2);
    expect(result).to.deep.equal([]);
  });

  it('should return the same array if iteratee is an identity function', function () {
    const input = [1, 2, 3];
    const result = map(input, (x) => x);
    expect(result).to.deep.equal([1, 2, 3]);
  });
});
