import reverse from '../src/reverse.js'

describe('reverse', () => {
  test('should reverse array', () => {
    const array = [1, 2, 3]
    expect(reverse(array)).toEqual([3, 2, 1])
  })

  test('should handle empty arrays', () => {
    expect(reverse([])).toEqual([])
  })

  test('should handle null/undefined', () => {
    expect(reverse(null)).toEqual([])
    expect(reverse(undefined)).toEqual([])
  })

  test('should handle arrays with different types', () => {
    const array = [1, 'b', { c: 3 }, [4]]
    expect(reverse(array)).toEqual([[4], { c: 3 }, 'b', 1])
  })
})