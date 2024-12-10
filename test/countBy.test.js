import countBy from '../src/countBy.js';

describe('countBy', () => {
  test('should transform keys by `iteratee` and count occurrences', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
  });

  test('should work with arrays of numbers', () => {
    const numbers = [6.1, 4.2, 6.3];
    expect(countBy(numbers, Math.floor)).toEqual({ '4': 1, '6': 2 });
  });

  test('should handle empty collections', () => {
    expect(countBy([], value => value)).toEqual({});
  });

  test('should handle complex transformations', () => {
    const data = ['one', 'two', 'three', 'four', 'five'];
    expect(countBy(data, value => value.length)).toEqual({ '3': 2, '4': 2, '5': 1 });
  });
});