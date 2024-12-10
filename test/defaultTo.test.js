describe('defaultTo', () => {
    test('should return value when it is not null/undefined/NaN', () => {
      expect(defaultTo(1, 10)).toBe(1);
      expect(defaultTo('string', 10)).toBe('string');
      expect(defaultTo(false, 10)).toBe(false);
      expect(defaultTo(0, 10)).toBe(0);
      expect(defaultTo([], 10)).toEqual([]);
    });
  
    test('should return defaultValue for null/undefined', () => {
      expect(defaultTo(null, 10)).toBe(10);
      expect(defaultTo(undefined, 10)).toBe(10);
    });
  
    test('should handle various default values', () => {
      expect(defaultTo(null, 'default')).toBe('default');
      expect(defaultTo(undefined, false)).toBe(false);
      expect(defaultTo(null, null)).toBe(null);
    });
  });