import compact from '../src/compact.js';

// compact.test.js
describe('compact', () => {
  test('should remove all falsey values', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    expect(compact(input)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with no falsey values', () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with only falsey values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(compact([])).toEqual([]);
  });
});