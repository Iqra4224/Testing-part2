
import { expect } from 'chai'; 
import eq from '../src/eq.js'; 

describe('eq', () => {

  it('should return true for same object', ()=>{
    const obj = { a: 1 };
    expect(eq(obj, obj)).to.equal(true);
  });

  it('should return false for different object reference', ()=>{
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).to.equal(false);
  });

  it('should return true for identical strings', () => {
    expect(eq('a', 'a')).to.equal(true);
  });
  
  it('should return false for different strings', () => {
    expect(eq('a', 'b')).to.equal(false);
  });
  
  it('should return true for identical numbers', () => {
    expect(eq(42, 42)).to.equal(true);
  });
  
  it('should return false for different numbers', () => {
    expect(eq(42, 43)).to.equal(false);
  });
  
  it('should return true for identical booleans', () => {
    expect(eq(true, true)).to.equal(true);
    expect(eq(false, false)).to.equal(true);
  });
  
  it('should return false for different booleans', () => {
    expect(eq(true, false)).to.equal(false);
  });

  it('should handle type coercion', ()=>{
    expect(eq('1', 1)).to.equal(true);
    expect(eq(true, 1)).to.equal(true);
  });

  it('should return true for NaN NaN', ()=>{
    expect(eq(NaN, NaN)).to.equal(true);
  });

  it('should return false for NaN and other ', () => {
    expect(eq(NaN, 42)).to.equal(false);
    expect(eq(42, NaN)).to.equal(false);
  });

  it('should return true for null compared with null', () => {
    expect(eq(null, null)).to.equal(true);
  });
  
  it('should return true for null compared with undefined', () => {
    expect(eq(null, undefined)).to.equal(true);
  });
  
  it('should return false for null compared with other values', () => {
    expect(eq(null, 0)).to.equal(false);
    expect(eq(null, '')).to.equal(false);
  });

  it('should return false for incompatible types', () => {
    expect(eq('a', 1)).to.equal(false);
    expect(eq(true, 'true')).to.equal(false);
  });
  
});
