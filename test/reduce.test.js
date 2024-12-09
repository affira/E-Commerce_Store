import reduce from '../src/reduce.js'

describe('reduce', () => {
  test('should reduce array with initial value', () => {
    const array = [1, 2, 3]
    const result = reduce(array, (sum, n) => sum + n, 0)
    expect(result).toBe(6)
  })

  test('should reduce array without initial value', () => {
    const array = [1, 2, 3]
    const result = reduce(array, (sum, n) => sum + n)
    expect(result).toBe(6)
  })

  test('should reduce objects', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 }
    const result = reduce(object, (result, value, key) => {
      result[key] = value * 2
      return result
    }, {})
    expect(result).toEqual({ 'a': 2, 'b': 4, 'c': 6 })
  })

  test('should handle empty arrays/objects', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0)
    expect(reduce({}, (result, value) => value, 0)).toBe(0)
  })
  test('baseReduce with initAccum and empty object', () => {
    const object = {}
    const result = reduce(object, (acc, value) => acc + value, 0)
    expect(result).toBe(0)
  })
  
  test('baseReduce with initAccum and non-empty object', () => {
    const object = { 'a': 1, 'b': 2 }
    const iteratee = jest.fn((result, num) => result + num)
    const result = reduce(object, iteratee, 0)
    expect(result).toBe(3)
    expect(iteratee).toHaveBeenCalledTimes(2)
  })
})