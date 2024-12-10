describe('upperFirst', () => {
    beforeEach(() => {
      // Mock createCaseFirst since it's an internal dependency
      jest.mock('./.internal/createCaseFirst', () => 
        () => (string = '') => 
          string.charAt(0).toUpperCase() + string.slice(1)
      );
    });
  
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
  
    test('should handle non-string inputs', () => {
      expect(upperFirst(null)).toBe('');
      expect(upperFirst(undefined)).toBe('');
      expect(upperFirst(123)).toBe('123');
    });
  });