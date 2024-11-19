import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize function', function() {

  it('should capitalize the first letter of the string and make the rest lowercase', function() {
    const result = capitalize('FRED');
    assert.equal(result, 'Fred');
  });

  it('should return an empty string if input is an empty string', function() {
    const result = capitalize('');
    assert.equal(result, '');
  });

  it('should handle strings with mixed case', function() {
    const result = capitalize('fRED');
    assert.equal(result, 'Fred');
  });

  it('should handle strings with numbers and special characters', function() {
    const result = capitalize('123abc');
    assert.equal(result, '123abc');
  });

  it('should handle string with leading and trailing spaces', function() {
    const result = capitalize('   fred  ');
    assert.equal(result, 'Fred');
  });

  it('should return the same value for already capitalized words', function() {
    const result = capitalize('Fred');
    assert.equal(result, 'Fred');
  });

  it('should handle non-string input by converting it to a string', function() {
    const result = capitalize(123);
    assert.equal(result, '123');
  });
});
