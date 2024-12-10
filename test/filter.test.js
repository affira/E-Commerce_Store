import filter from '../src/filter.js';

describe('filter', () => {
  test('should filter array elements based on predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  test('should handle empty arrays', () => {
    expect(filter([], value => value)).toEqual([]);
  });

  test('should handle null/undefined arrays', () => {
    expect(filter(null, value => value)).toEqual([]);
    expect(filter(undefined, value => value)).toEqual([]);
  });

  test('should provide correct arguments to predicate', () => {
    const spy = jest.fn(x => x > 2);
    filter([1, 2, 3, 4], spy);
    expect(spy).toHaveBeenCalledWith(1, 0, [1, 2, 3, 4]);
    expect(spy).toHaveBeenCalledWith(2, 1, [1, 2, 3, 4]);
    expect(spy).toHaveBeenCalledWith(3, 2, [1, 2, 3, 4]);
    expect(spy).toHaveBeenCalledWith(4, 3, [1, 2, 3, 4]);
  });

  test('Bug: should not return nested array', () => {
    // This test will fail due to the bug in filter implementation
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, num => num > 2);
    expect(Array.isArray(result[0])).toBe(false); // This will fail
    expect(result).toEqual([3, 4]); // This will fail
  });
});