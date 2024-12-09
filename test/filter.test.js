import filter from '../src/filter.js'

describe('filter', () => {
  test('should filter array elements based on predicate', () => {
    const array = [1, 2, 3, 4, 5]
    const result = filter(array, num => num % 2 === 0)
    expect(result).toEqual([2, 4])
  })

  test('should handle empty arrays', () => {
    expect(filter([], x => x > 0)).toEqual([])
  })

  test('should handle null/undefined arrays', () => {
    expect(filter(null, x => x > 0)).toEqual([])
    expect(filter(undefined, x => x > 0)).toEqual([])
  })

  test('should pass correct arguments to predicate', () => {
    const spy = jest.fn()
    const array = ['a', 'b']
    filter(array, spy)
    expect(spy).toHaveBeenCalledWith('a', 0, array)
    expect(spy).toHaveBeenCalledWith('b', 1, array)
  })
})