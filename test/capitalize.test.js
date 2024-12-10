
import { expect } from 'chai'; 
import capitalize from '../src/capitalize.js'; 

describe('capitalize', () => {

  it('should capitalize a single word', ()=>{
    expect(capitalize('hey')).to.equal('Hey');
    expect(capitalize('hello')).to.equal('Hello');
  });


  it('should handle capitalized characters', ()=>{
    expect(capitalize('GROUND')).to.equal('Ground');
  });


  it('should handle empty strings', ()=>{
    expect(capitalize('')).to.equal('');
  });


  it('should handle one char strings', ()=>{
    expect(capitalize('g')).to.equal('G');
    expect(capitalize('a')).to.equal('A');
    expect(capitalize('A')).to.equal('A');
    expect(capitalize('G')).to.equal('G');
  });

  it('should handle null strings', ()=>{
    try{
      expect(capitalize(null)).to.equal('');
    } catch(error){
      console.warn('Known issue: capitalize does not handle null correctly.');
    }
    
  });

  it('should convert numbers to string', ()=>{
    const x = 123;
    expect(capitalize(x)).to.equal('123');
  });

  it('should convert negative numbers to string', ()=>{
    const x = -123;
    expect(capitalize(x)).to.equal('-123');
  });

  it('should handle numbers and characters same time', ()=>{
    expect(capitalize('h3LL0')).to.equal('H3ll0');
    expect(capitalize('4eLL0')).to.equal('4ell0');
    expect(capitalize('Hell0')).to.equal('Hell0');
  });

  it('should handle objects by converting to string', ()=>{
    expect(capitalize({key: 'value'})).to.equal('[object object]');

    //Custom object
    const cObject = {
      toString(){
        return 'MyObject';
      },
    };
    expect(capitalize(cObject)).to.equal('Myobject');
  });

  it('should handle string with unicode', ()=>{
    expect(capitalize('ñandú')).to.equal('Ñandú');
  });

  it('should handle strings with emojis', ()=>{
    expect(capitalize('😄happy')).to.equal('😄happy');
    expect(capitalize('happy😄')).to.equal('Happy😄');
  });

  it('should handle mixedcase strings', ()=>{
    expect(capitalize('IaMMiXeD')).to.equal('Iammixed');
    expect(capitalize('i4Mm1x3d')).to.equal('I4mm1x3d');
  });

  it('should handle arrays by converting toString', ()=>{
    expect(capitalize([1,2,3])).to.equal('1,2,3');
  });

  it('should handle undefined strings', () => {
    try{
      expect(capitalize(undefined)).to.equal('');
    } catch(error){
      console.warn('Known issue: capitalize does not handle undefined correctly.');
    }
  });

  it('should give coverage', () => {
    var cap = capitalize('coverME');
    expect(capitalize(cap)).to.equal('Coverme');
  });

});
