
import { expect } from 'chai'; 
import filter from '../src/filter.js'; 

describe('filter', () => {
  it('filters array based on predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ user: 'barney', active: true }]);
  });

  it('returns [[]] when no elements satisfy predicate', () => {
    const numbers = [1, 2, 3];
    const result = filter(numbers, (num) => num > 5);
    expect(result).to.deep.equal([[]]);
  });

  it('handles empty arrays correctly', () => {
    const result = filter([], () => true);
    expect(result).to.deep.equal([[]]);
  });

  it('handles null or undefined arrays', () => {
    const resultNull = filter(null, () => true);
    const resultUndefined = filter(undefined, () => true);
    expect(resultNull).to.deep.equal([[]]);
    expect(resultUndefined).to.deep.equal([[]]);
  });

  it('does not mutate the original array', () => {
    const numbers = [1, 2, 3];
    filter(numbers, (num) => num > 1);
    expect(numbers).to.deep.equal([1, 2, 3]);
  });
});
