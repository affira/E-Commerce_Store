import keys from '../src/keys.js';

describe('keys', () => {
    test('should get keys of objects', () => {
      function Foo() {
        this.a = 1;
        this.b = 2;
      }
      Foo.prototype.c = 3;
  
      expect(keys(new Foo()).sort()).toEqual(['a', 'b']);
      expect(keys({ a: 1, b: 2 }).sort()).toEqual(['a', 'b']);
    });
  
    test('should handle array-like objects', () => {
      expect(keys('hi')).toEqual(['0', '1']);
      expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2']);
    });
  
    test('should handle null/undefined values', () => {
      expect(keys(null)).toEqual([]);
      expect(keys(undefined)).toEqual([]);
    });
  
    test('should handle other primitives', () => {
      expect(keys(1)).toEqual([]);
      expect(keys(true)).toEqual([]);
      expect(keys(Symbol())).toEqual([]);
    });
  });