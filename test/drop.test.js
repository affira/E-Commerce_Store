describe('drop', () => {
    test('should drop n elements from beginning', () => {
      expect(drop([1, 2, 3])).toEqual([2, 3]);
      expect(drop([1, 2, 3], 2)).toEqual([3]);
      expect(drop([1, 2, 3], 5)).toEqual([]);
      expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });
  
    test('should handle negative numbers', () => {
      expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
      expect(drop([1, 2, 3], -5)).toEqual([1, 2, 3]);
    });
  
    test('should handle null/undefined arrays', () => {
      expect(drop(null)).toEqual([]);
      expect(drop(undefined)).toEqual([]);
    });
  
    test('should handle non-integer n values', () => {
      expect(drop([1, 2, 3], 1.5)).toEqual([2, 3]);
      expect(drop([1, 2, 3], '2')).toEqual([3]);
    });
  });