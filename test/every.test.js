describe('every', () => {
    test('should check if predicate returns true for all elements', () => {
      expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
      expect(every([2, 4, 6], num => num % 2 === 0)).toBe(true);
    });
  
    test('should handle empty arrays', () => {
      expect(every([], Boolean)).toBe(true);
    });
  
    test('should provide correct arguments to predicate', () => {
      const spy = jest.fn();
      every([1, 2, 3], spy);
      expect(spy).toHaveBeenNthCalledWith(1, 1, 0, [1, 2, 3]);
      expect(spy).toHaveBeenNthCalledWith(2, 2, 1, [1, 2, 3]);
    });
  
    test('should handle null/undefined arrays', () => {
      expect(every(null, Boolean)).toBe(true);
      expect(every(undefined, Boolean)).toBe(true);
    });
  });