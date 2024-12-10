describe('toNumber', () => {
    test('should convert basic numeric values', () => {
      expect(toNumber(3.2)).toBe(3.2);
      expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
      expect(toNumber(Infinity)).toBe(Infinity);
      expect(toNumber('3.2')).toBe(3.2);
    });
  
    test('should handle different number formats', () => {
      expect(toNumber('0b1010')).toBe(10);    // binary
      expect(toNumber('0o777')).toBe(511);    // octal
      expect(toNumber('0xFF')).toBe(255);     // hex
      expect(toNumber('-0xFF')).toBe(NaN);    // invalid hex
    });
  
    test('should handle objects with valueOf', () => {
      const obj = { valueOf: () => 3.2 };
      expect(toNumber(obj)).toBe(3.2);
    });
  
    test('should handle edge cases', () => {
      expect(toNumber(Symbol())).toBe(NaN);
      expect(toNumber(null)).toBe(0);
      expect(toNumber(undefined)).toBe(NaN);
      expect(toNumber('')).toBe(0);
      expect(toNumber(' ')).toBe(0);
      expect(toNumber('   42   ')).toBe(42);
    });
  
    test('should handle nested objects', () => {
      const nestedObj = {
        valueOf: () => ({
          toString: () => '42'
        })
      };
      expect(toNumber(nestedObj)).toBe(42);
    });
  });