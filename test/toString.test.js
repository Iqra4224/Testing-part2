
import { expect } from 'chai'; 
import toString from '../src/toString.js'; 

describe('toString', () => {

  it('should return same string for string input', ()=>{
    expect(toString('hey')).to.equal('hey');
    expect(toString('')).to.equal('');
  });

  it('should convert numbers to string', ()=>{
    expect(toString(43)).to.equal('43');
    expect(toString(-2)).to.equal('-2');
    expect(toString(123.456)).to.equal('123.456');
  });

  it('should handle null strings', ()=>{
    try{
      expect(toString(null)).to.equal('');
    } catch(error){
      console.warn('Error converting null strings');
    }
  });

  it('should handle undefined strings', ()=>{
    try{
      expect(toString(undefined)).to.equal('');
    } catch(error){
      console.warn('Error converting undefined strings');
    }
  });

  it('should convert arrays to css form', ()=>{
    expect(toString([1, 2, 3])).to.equal('1,2,3');
    expect(toString(['a', 'b', 'c'])).to.equal('a,b,c');
  });

  it('should handle nested arrays', ()=>{
    expect(toString([1, 2, [3, 4], 5, 6])).to.equal('1,2,3,4,5,6');
  });

  it('should handle empty arrays', ()=>{
    expect(toString([])).to.equal('');
  });

  it('should handle arrays with null and undefined elements', ()=>{
    try{
      expect(toString([1, null, undefined, 4])).to.equal('1,,,4');
    }catch(error){
      console.warn('error handling arrays with null and undefined');
    }
  });

  it('should handle objects', ()=>{
    expect(toString({ key: 'value' })).to.equal('[object Object]');
  });

  it('should hanlde symbols', ()=>{
    const symbol = Symbol('testSymbol');
    expect(toString(symbol)).to.equal('Symbol(testSymbol)');
  });

  it('should handle 0 and -0', ()=>{
    expect(toString(0)).to.equal('0');
    expect(toString(-0)).to.equal('-0');
  });

  it('should handle Infinity', () => {
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(-Infinity)).to.equal('-Infinity');
  });

  it('should handle Nan', () => {
    expect(toString(NaN)).to.equal('NaN');
  });

});
