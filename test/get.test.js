import { expect } from 'chai'; 
import get from '../src/get.js'; 


describe('get', () => {
  it('should retrieve the value at the specified path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, 'a[0].b.c');
    expect(result).to.equal(3);
  });

  it('should work with path provided as an array', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, ['a', '0', 'b', 'c']);
    expect(result).to.equal(3);
  });

  it('should return the default value if the resolved value is undefined', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, 'a[0].b.d', 'default');
    expect(result).to.equal('default');
  });

  it('should return undefined if the path does not exist and no default value is provided', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, 'a[0].b.d');
    expect(result).to.be.undefined;
  });

  it('should return the default value for undefined object', () => {
    const result = get(undefined, 'a[0].b.c', 'default');
    expect(result).to.equal('default');
  });

  it('should return the default value for null object', () => {
    const result = get(null, 'a[0].b.c', 'default');
    expect(result).to.equal('default');
  });

  it('should return the value when path exists even with a default value', () => {
    const object = { a: { b: 3 } };
    const result = get(object, 'a.b', 'default');
    expect(result).to.equal(3);
  });

  it('should handle nested paths with array indices', () => {
    const object = { a: [{ b: { c: 5 } }] };
    const result = get(object, 'a[0].b.c', 'default');
    expect(result).to.equal(5);
  });

  it('should return undefined when path is empty', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, '', 'default');
    expect(result).to.equal('default');
  });
});
