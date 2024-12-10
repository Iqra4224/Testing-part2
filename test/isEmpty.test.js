import assert from 'assert';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', function() {
  it('should return true for null', function() {
    assert.strictEqual(isEmpty(null), true);
  });

  it('should return true for undefined', function() {
    assert.strictEqual(isEmpty(undefined), true);
  });

  it('should return true for an empty array', function() {
    assert.strictEqual(isEmpty([]), true);
  });

  it('should return false for a non-empty array', function() {
    assert.strictEqual(isEmpty([1, 2, 3]), false);
  });

  it('should return true for an empty string', function() {
    assert.strictEqual(isEmpty(''), true);
  });

  it('should return false for a non-empty string', function() {
    assert.strictEqual(isEmpty('abc'), false);
  });

  it('should return true for an empty object', function() {
    assert.strictEqual(isEmpty({}), true);
  });

  it('should return false for an object with properties', function() {
    assert.strictEqual(isEmpty({ 'a': 1 }), false);
  });

  it('should return true for an empty Map', function() {
    const map = new Map();
    assert.strictEqual(isEmpty(map), true);
  });

  it('should return false for a Map with values', function() {
    const map = new Map();
    map.set('key', 'value');
    assert.strictEqual(isEmpty(map), false);
  });

  it('should return true for an empty Set', function() {
    const set = new Set();
    assert.strictEqual(isEmpty(set), true);
  });

  it('should return false for a Set with values', function() {
    const set = new Set([1, 2, 3]);
    assert.strictEqual(isEmpty(set), false);
  });

  it('should return true for an empty arguments object', function() {
    (function() {
      assert.strictEqual(isEmpty(arguments), true);
    })();
  });

  it('should return false for a non-empty arguments object', function() {
    (function() {
      assert.strictEqual(isEmpty(arguments), false);
    })('arg1');
  });

  it('should return true for a buffer with length 0', function() {
    const buffer = Buffer.alloc(0);
    assert.strictEqual(isEmpty(buffer), true);
  });

  it('should return false for a buffer with length greater than 0', function() {
    const buffer = Buffer.from([1, 2, 3]);
    assert.strictEqual(isEmpty(buffer), false);
  });

  it('should return true for an empty typed array', function() {
    const typedArray = new Uint8Array(0);
    assert.strictEqual(isEmpty(typedArray), true);
  });

  it('should return false for a non-empty typed array', function() {
    const typedArray = new Uint8Array([1, 2, 3]);
    assert.strictEqual(isEmpty(typedArray), false);
  });

  it('should return true for an empty prototype object', function() {
    const proto = Object.getPrototypeOf({});
    assert.strictEqual(isEmpty(proto), true);
  });

  it('should return false for a prototype object with properties', function() {
    function Testing() {}
    Testing.prototype.a = 1;
    const proto = Testing.prototype;
    assert.strictEqual(isEmpty(proto), false);
  });
});
