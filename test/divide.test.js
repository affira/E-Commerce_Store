describe('divide', () => {
    test('should divide two numbers correctly', () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(10, 2)).toBe(5);
      expect(divide(-6, 2)).toBe(-3);
    });
  
    test('should handle decimal numbers', () => {
      expect(divide(5.5, 2)).toBe(2.75);
      expect(divide(7.5, 2.5)).toBe(3);
    });
  
    test('should handle division by zero', () => {
      expect(divide(6, 0)).toBe(Infinity);
      expect(divide(-6, 0)).toBe(-Infinity);
      expect(divide(0, 0)).toBe(NaN);
    });
  
    test('should handle non-number inputs', () => {
      expect(divide('6', '2')).toBe(3);
      expect(divide('10', '5')).toBe(2);
    });
  });