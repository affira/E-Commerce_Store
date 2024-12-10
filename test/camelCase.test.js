import camelCase from '../src/camelCase.js';

describe('camelCase', () => {
    it('should convert a string with spaces into camel case', () => {
      const result = camelCase('foo bar');
      expect(result).toEqual('fooBar');
    });
  
    it('should convert a string with hyphens into camel case', () => {
      const result = camelCase('foo-bar');
      expect(result).toEqual('fooBar');
    });
  
    it('should convert a string with underscores into camel case', () => {
      const result = camelCase('foo_bar');
      expect(result).toEqual('fooBar');
    });
  
    it('should handle strings with mixed case', () => {
      const result = camelCase('Foo BaR');
      expect(result).toEqual('fooBar');
    });
  
    it('should return an empty string for an empty input', () => {
      const result = camelCase('');
      expect(result).toEqual('');
    });
  
    it('should handle strings with apostrophes or special characters', () => {
      const result = camelCase("foo's bar");
      expect(result).toEqual('fooSBar');
    });
  
    it('should handle strings with multiple spaces, hyphens, and underscores', () => {
      const result = camelCase('Foo   Bar--Baz_qux');
      expect(result).toEqual('fooBarBazQux');
    });
});
