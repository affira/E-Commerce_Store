import compact from '../src/compact.js'

describe('compact', () => {
  test('should filter out falsey values', () => {
    const array = [0, 1, false, 2, '', 3, null, undefined, NaN]
    expect(compact(array)).toEqual([1, 2, 3])
  })

  test('should handle empty arrays', () => {
    expect(compact([])).toEqual([])
  })

  test('should handle null/undefined', () => {
    expect(compact(null)).toEqual([])
    expect(compact(undefined)).toEqual([])
  })
  
  test('should preserve objects and arrays', () => {
    const obj = { a: 1 }
    const arr = [1]
    expect(compact([obj, arr])).toEqual([obj, arr])
  })
})