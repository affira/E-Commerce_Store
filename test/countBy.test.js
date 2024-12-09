import countBy from '../src/countBy.js'

describe('countBy', () => {
  test('should transform keys by iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    const result = countBy(users, value => value.active)
    expect(result).toEqual({ 'true': 2, 'false': 1 })
  })

  test('should handle empty collections', () => {
    expect(countBy([], value => value)).toEqual({})
  })

  test('should handle simple array values', () => {
    const numbers = [6.1, 4.2, 6.3]
    const result = countBy(numbers, Math.floor)
    expect(result).toEqual({ '4': 1, '6': 2 })
  })
})