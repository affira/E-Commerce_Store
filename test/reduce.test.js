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
    const spy = jest.fn((sum, n) => sum + n);
    reduce([1, 2], spy, 0);
    expect(spy).toHaveBeenCalledWith(0, 1, 0, [1, 2]);
    expect(spy).toHaveBeenCalledWith(1, 2, 1, [1, 2]);
  });
});