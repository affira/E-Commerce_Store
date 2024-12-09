import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {
  test('should check if array is empty', () => {
    expect(isEmpty([])).toBeTruthy()
    expect(isEmpty([1, 2, 3])).toBeFalsy()
  })

  test('should check if object is empty', () => {
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty({ a: 1 })).toBeFalsy()
  })

  test('should check if string is empty', () => {
    expect(isEmpty('')).toBeTruthy()
    expect(isEmpty('abc')).toBeFalsy()
  })

  test('should handle null/undefined', () => {
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty(undefined)).toBeTruthy()
  })

  test('should handle Map and Set', () => {
    expect(isEmpty(new Map())).toBeTruthy()
    expect(isEmpty(new Set())).toBeTruthy()
    
    const map = new Map().set('a', 1)
    const set = new Set().add(1)
    expect(isEmpty(map)).toBeFalsy()
    expect(isEmpty(set)).toBeFalsy()
  })
})