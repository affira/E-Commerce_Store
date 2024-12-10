describe('isArguments', () => {
    test('should return true for arguments objects', () => {
      const args = (function() { return arguments; }(1, 2, 3));
      expect(isArguments(args)).toBe(true);
    });
  
    test('should return false for non-arguments values', () => {
      expect(isArguments([1, 2, 3])).toBe(false);
      expect(isArguments({ '0': 1, '1': 2, '2': 3 })).toBe(false);
      expect(isArguments(null)).toBe(false);
      expect(isArguments(undefined)).toBe(false);
    });
  
    test('should handle array-like objects', () => {
      const arrayLike = { length: 3, '0': 1, '1': 2, '2': 3 };
      expect(isArguments(arrayLike)).toBe(false);
    });
  });