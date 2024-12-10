import reduce from '../src/reduce.js';

describe('reduce', () => {
  test('should reduce array with initial value', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
    expect(reduce([1, 2], (sum, n) => sum + n, 10)).toBe(13);
  });

  test('should reduce array without initial value', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
  });

  test('should reduce objects', () => {
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  test('should handle empty collections', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
    expect(reduce({}, (sum, n) => sum + n, 0)).toBe(0);
  });

  test('should provide correct arguments to iteratee', () => {
    const calls = [];
    const array = [1, 2];
    
    reduce(array, (acc, value, index, collection) => {
      calls.push({ acc, value, index, collection });
      return acc + value;
    }, 0);

    expect(calls).toEqual([
      { acc: 0, value: 1, index: 0, collection: array },
      { acc: 1, value: 2, index: 1, collection: array }
    ]);
  });

  test('should handle array-like objects', () => {
    const arrayLike = { 0: 'a', 1: 'b', length: 2 };
    const result = reduce(arrayLike, (acc, val) => acc + val, '');
    expect(result).toBe('ab');
  });

  test('should handle single element arrays without initial value', () => {
    expect(reduce([5], (acc, val) => acc + val)).toBe(5);
  });
});