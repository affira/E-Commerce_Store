import every from '../src/every.js';

describe('every', () => {
  test('should check if predicate returns true for all elements', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
    expect(every([2, 4, 6], num => num % 2 === 0)).toBe(true);
  });

  test('should handle empty arrays', () => {
    expect(every([], Boolean)).toBe(true);
  });

  test('should provide correct arguments to predicate', () => {
    const calls = [];
    const predicate = (value, index, arr) => {
      calls.push({ value, index, arr });
      return true;
    };
    
    const array = [1, 2, 3];
    every(array, predicate);
    
    expect(calls).toEqual([
      { value: 1, index: 0, arr: array },
      { value: 2, index: 1, arr: array },
      { value: 3, index: 2, arr: array }
    ]);
  });

  test('should handle null/undefined arrays', () => {
    expect(every(null, Boolean)).toBe(true);
    expect(every(undefined, Boolean)).toBe(true);
  });

  test('should stop iteration on first falsy predicate result', () => {
    const calls = [];
    const predicate = (value) => {
      calls.push(value);
      return value < 3;
    };
    
    every([1, 2, 3, 4], predicate);
    expect(calls).toEqual([1, 2, 3]); // Should stop at 3
  });
});