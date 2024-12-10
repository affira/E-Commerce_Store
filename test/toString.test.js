import toString from '../src/toString.js';

describe('toString', () => {
  test('should convert basic values to strings', () => {
    expect(toString('string')).toBe('string');
    expect(toString(123)).toBe('123');
    expect(toString(true)).toBe('true');
  });

  test('should handle arrays', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString([1, null, 3])).toBe('1,,3');
    expect(toString([1, undefined, 3])).toBe('1,,3');
    expect(toString([1, [2, 3], 4])).toBe('1,2,3,4');
  });

  test('should handle special numeric values', () => {
    expect(toString(-0)).toBe('-0');
    expect(toString(0)).toBe('0');
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
    expect(toString(NaN)).toBe('NaN');
  });

  test('should handle null and undefined', () => {
    expect(toString(null)).toBe('null');
    expect(toString(undefined)).toBe('undefined');
  });

  test('should handle symbols', () => {
    const sym = Symbol('test');
    expect(toString(sym)).toBe(sym.toString());
  });

  test('should handle nested arrays', () => {
    expect(toString([1, [2, [3, 4]]])).toBe('1,2,3,4');
    expect(toString([[1], [2], [3]])).toBe('1,2,3');
  });

  test('should handle arrays with multiple nulls/undefined', () => {
    expect(toString([null, null])).toBe(',');
    expect(toString([undefined, undefined])).toBe(',');
    expect(toString([null, undefined, null])).toBe(',,');
  });
});