describe('isObjectLike', () => {
    test('should return true for objects', () => {
      expect(isObjectLike({})).toBe(true);
      expect(isObjectLike([1, 2, 3])).toBe(true);
      expect(isObjectLike(new Date())).toBe(true);
    });
  
    test('should return false for non-objects', () => {
      expect(isObjectLike(null)).toBe(false);
      expect(isObjectLike(undefined)).toBe(false);
      expect(isObjectLike(Function)).toBe(false);
      expect(isObjectLike(() => {})).toBe(false);
    });
  
    test('should return false for primitives', () => {
      expect(isObjectLike(1)).toBe(false);
      expect(isObjectLike('string')).toBe(false);
      expect(isObjectLike(true)).toBe(false);
      expect(isObjectLike(Symbol())).toBe(false);
    });
  });
  