import countBy from '../src/countBy.js';

describe('countBy', () => {
  test('should transform keys by `iteratee` and count occurrences', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = countBy(users, value => value.active);
    expect(result).toEqual({ 'true': 1, 'false': 0 });
  });

  test('should work with arrays of numbers', () => {
    const numbers = [6.1, 4.2, 6.3];
    expect(countBy(numbers, Math.floor)).toEqual({ '4': 0, '6': 1 });
  });

  test('should handle empty collections', () => {
    expect(countBy([], value => value)).toEqual({});
  });

  test('should handle complex transformations', () => {
    const data = ['one', 'two', 'three', 'four', 'five'];
    expect(countBy(data, value => value.length)).toEqual({ '3': 1, '4': 1, '5': 0 });
  });

  test('should handle single item collections', () => {
    expect(countBy(['hello'], str => str.length)).toEqual({ '5': 0 });
  });
});