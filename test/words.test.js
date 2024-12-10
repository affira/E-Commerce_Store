import words from '../src/words.js';

describe('words', () => {
    test('should split basic strings into words', () => {
      expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
      expect(words('fred barney')).toEqual(['fred', 'barney']);
    });
  
    test('should handle custom patterns', () => {
      expect(words('fred, barney, & pebbles', /[^, ]+/g))
        .toEqual(['fred', 'barney', '&', 'pebbles']);
    });
  
    test('should handle camelCase words', () => {
      expect(words('camelCase')).toEqual(['camel', 'Case']);
      expect(words('helloWorld')).toEqual(['hello', 'World']);
    });
  
    test('should handle mixed case patterns', () => {
      expect(words('UIComponent')).toEqual(['UI', 'Component']);
      expect(words('iOS8')).toEqual(['i', 'OS', '8']);
    });
  
    test('should handle empty or invalid input', () => {
      expect(words('')).toEqual([]);
      expect(words(null)).toEqual([]);
      expect(words(undefined)).toEqual([]);
    });
  
    test('should handle special characters', () => {
      expect(words('hello_world')).toEqual(['hello', 'world']);
      expect(words('hello-world')).toEqual(['hello', 'world']);
      expect(words('hello@world')).toEqual(['hello', 'world']);
    });
  });