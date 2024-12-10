import filter from '../src/filter.js';

describe('filter', () => {
  test('should filter array elements based on predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result[0]).toEqual({ 'user': 'barney', 'active': true });
    expect(result.length).toBe(1);
  });

  test('should handle empty arrays', () => {
    const result = filter([], value => value);
    expect(result).toEqual([[]]);
  });

  test('should handle null/undefined arrays', () => {
    expect(filter(null, value => value)).toEqual([[]]);
    expect(filter(undefined, value => value)).toEqual([[]]);
  });

  test('should provide correct arguments to predicate', () => {
    const calls = [];
    const predicate = (value, index, arr) => {
      calls.push({ value, index, arr });
      return value > 2;
    };
    
    const array = [1, 2, 3, 4];
    filter(array, predicate);
    
    expect(calls).toEqual([
      { value: 1, index: 0, arr: array },
      { value: 2, index: 1, arr: array },
      { value: 3, index: 2, arr: array },
      { value: 4, index: 3, arr: array }
    ]);
  });

  test('should return array with filtered values', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, num => num > 2);
    expect(result[0]).toBe(3);
    expect(result[1]).toBe(4);
    expect(result.length).toBe(2);
  });
});