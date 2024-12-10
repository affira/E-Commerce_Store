import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  test('should convert first character to upper case', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });

  test('should handle empty strings', () => {
    expect(upperFirst('')).toBe('');
  });

  test('should handle single characters', () => {
    expect(upperFirst('a')).toBe('A');
    expect(upperFirst('A')).toBe('A');
  });

  test('should handle special characters', () => {
    expect(upperFirst('$hello')).toBe('$hello');
    expect(upperFirst('123abc')).toBe('123abc');
  });

  test('should preserve case of remaining characters', () => {
    expect(upperFirst('fRED')).toBe('FRED');
    expect(upperFirst('mixed CASE')).toBe('Mixed CASE');
  });
});