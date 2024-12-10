import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {
    test('should identify Symbol primitives', () => {
      expect(isSymbol(Symbol.iterator)).toBe(true);
      expect(isSymbol(Symbol('test'))).toBe(true);
      expect(isSymbol(Symbol.for('test'))).toBe(true);
    });
  
    test('should identify Symbol objects', () => {
      expect(isSymbol(Object(Symbol('test')))).toBe(true);
    });
  
    test('should return false for non-symbols', () => {
      expect(isSymbol('abc')).toBe(false);
      expect(isSymbol(1)).toBe(false);
      expect(isSymbol({})).toBe(false);
      expect(isSymbol(null)).toBe(false);
      expect(isSymbol(undefined)).toBe(false);
    });
  });