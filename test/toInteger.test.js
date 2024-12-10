import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
    test('should convert floating point numbers', () => {
      expect(toInteger(3.2)).toBe(3);
      expect(toInteger(-3.2)).toBe(-3);
      expect(toInteger(3.7)).toBe(3);
      expect(toInteger(-3.7)).toBe(-3);
    });
  
    test('should handle Infinity and -Infinity', () => {
      expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
      expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
    });
  
    test('should handle string numbers', () => {
      expect(toInteger('3.2')).toBe(3);
      expect(toInteger('-3.2')).toBe(-3);
      expect(toInteger('3.7')).toBe(3);
    });
  
    test('should handle edge cases', () => {
      expect(toInteger(null)).toBe(0);
      expect(toInteger(undefined)).toBe(0);
      expect(toInteger(NaN)).toBe(0);
      expect(toInteger('')).toBe(0);
      expect(toInteger(true)).toBe(1);
      expect(toInteger(false)).toBe(0);
    });
  
    test('should handle MIN_VALUE', () => {
      expect(toInteger(Number.MIN_VALUE)).toBe(0);
    });
  });