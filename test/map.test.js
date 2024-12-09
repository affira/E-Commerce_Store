import map from '../src/map.js'

describe('map', () => {
  test('should map values using iteratee', () => {
    const array = [1, 2, 3]
    const result = map(array, n => n * 2)
    expect(result).toEqual([2, 4, 6])
  })

  test('should handle empty arrays', () => {
    expect(map([], x => x * 2)).toEqual([])
  })

  test('should handle null/undefined arrays', () => {
    expect(map(null, x => x * 2)).toEqual([])
    expect(map(undefined, x => x * 2)).toEqual([])
  })

  test('should pass correct arguments to iteratee', () => {
    const spy = jest.fn()
    const array = ['a', 'b']
    map(array, spy)
    expect(spy).toHaveBeenCalledWith('a', 0, array)
    expect(spy).toHaveBeenCalledWith('b', 1, array)
  })
})