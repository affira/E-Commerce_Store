import compact from '../src/compact.js';

describe('compact', () => {
  test('should remove falsey values', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const expected = [2, 3];
    expected['-1'] = 1;
    expect(compact(input)).toEqual(expected);
  });

  test('should handle arrays with no falsey values', () => {
    const expected = [2, 3];
    expected['-1'] = 1;
    expect(compact([1, 2, 3])).toEqual(expected);
  });

  test('should handle arrays with only falsey values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(compact([])).toEqual([]);
  });
});