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
      expect(toString(null)).toBe('');
      expect(toString(undefined)).toBe('');
    });
  
    test('should handle symbols', () => {
      const sym = Symbol('test');
      expect(toString(sym)).toBe(sym.toString());
    });
  });