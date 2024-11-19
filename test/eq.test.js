import { expect } from 'chai';  // Use expect from Chai
import eq from '../src/eq.js';  // Import eq function from the correct path

describe('eq function', function() {

  it('should return true for identical values', function() {
    const object = { 'a': 1 };
    const other = object;
    const result = eq(object, other);
    expect(result).to.be.true;  // Use expect for assertions
  });

  it('should return false for different object instances with the same content', function() {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    const result = eq(object, other);
    expect(result).to.be.false;  // Use expect for assertions
  });

  it('should return true for identical primitive values', function() {
    const result = eq('a', 'a');
    expect(result).to.be.true;  // Use expect for assertions
  });

  it('should return false for a string and an object with the same string value', function() {
    const result = eq('a', Object('a'));
    expect(result).to.be.false;  // Use expect for assertions
  });

  it('should return true for NaN compared to NaN', function() {
    const result = eq(NaN, NaN);
    expect(result).to.be.true;  // Use expect for assertions
  });

  it('should return false for different primitive values', function() {
    const result = eq('a', 'b');
    expect(result).to.be.false;  // Use expect for assertions
  });

  it('should return false for null and undefined being compared', function() {
    const result = eq(null, undefined);
    expect(result).to.be.false;  // Use expect for assertions
  });

  it('should return false for values that are strictly equal but different types', function() {
    const result = eq(1, '1');
    expect(result).to.be.false;  // Use expect for assertions
  });
});
