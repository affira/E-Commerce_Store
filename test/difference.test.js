describe('difference', () => {
    test('should return array values not included in other arrays', () => {
      expect(difference([2, 1], [2, 3])).toEqual([1]);
      expect(difference([1, 2, 3, 4], [2, 4], [3])).toEqual([1]);
    });
  
    test('should handle empty arrays', () => {
      expect(difference([], [1, 2])).toEqual([]);
      expect(difference([1, 2], [])).toEqual([1, 2]);
    });
  
    test('should handle arrays with different types', () => {
      expect(difference([1, '2', 3], [1, 2, '3'])).toEqual(['2', 3]);
    });
  
    test('should return empty array for non-array-like objects', () => {
      expect(difference(null, [1, 2])).toEqual([]);
      expect(difference(undefined, [1, 2])).toEqual([]);
      expect(difference({}, [1, 2])).toEqual([]);
    });
  });
  