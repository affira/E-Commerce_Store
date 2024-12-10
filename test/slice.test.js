import slice from '../src/slice.js';

describe('slice', () => {
    test('should slice array with positive indices', () => {
      expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
      expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
      expect(slice([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  
    test('should handle negative indices', () => {
      expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
      expect(slice([1, 2, 3, 4], 1, -1)).toEqual([2, 3]);
      expect(slice([1, 2, 3, 4], -3, -1)).toEqual([2, 3]);
    });
  
    test('should handle edge cases', () => {
      expect(slice(null)).toEqual([]);
      expect(slice(undefined)).toEqual([]);
      expect(slice([])).toEqual([]);
      expect(slice([1, 2, 3], 4)).toEqual([]);
      expect(slice([1, 2, 3], 0, -4)).toEqual([]);
      expect(slice([1, 2, 3], -5)).toEqual([1, 2, 3]);
    });
  
    test('should handle sparse arrays', () => {
      // eslint-disable-next-line no-sparse-arrays
      const array = [1, , 3];
      const result = slice(array, 0, 3);
      expect(result).toEqual([1, undefined, 3]);
      expect(Object.keys(result)).toEqual(['0', '1', '2']);
    });
  });