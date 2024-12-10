describe('castArray', () => {
    test('should wrap non-array values in an array', () => {
      expect(castArray(1)).toEqual([1]);
      expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
      expect(castArray('abc')).toEqual(['abc']);
      expect(castArray(null)).toEqual([null]);
      expect(castArray(undefined)).toEqual([undefined]);
    });
  
    test('should return an empty array for no arguments', () => {
      expect(castArray()).toEqual([]);
    });
  
    test('should return array values without modification', () => {
      const array = [1, 2, 3];
      expect(castArray(array) === array).toBe(true);
    });
  });