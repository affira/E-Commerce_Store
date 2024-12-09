import get from '../src/get.js'

describe('get', () => {
  const object = { 
    'a': [{ 'b': { 'c': 3 } }],
    'x': { 'y': { 'z': 4 } },
    'arr': [1, 2, { 'val': 5 }]
  }

  test('should get value at path of object using string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
    expect(get(object, 'x.y.z')).toBe(4)
    expect(get(object, 'arr[2].val')).toBe(5)
  })

  test('should get value at path of object using array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
    expect(get(object, ['x', 'y', 'z'])).toBe(4)
    expect(get(object, ['arr', '2', 'val'])).toBe(5)
  })

  test('should return default value for undefined resolved values', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default')
    expect(get(object, ['x', 'y', 'w'], 42)).toBe(42)
    expect(get(object, 'nonexistent', null)).toBe(null)
  })

  test('should handle null/undefined objects', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default')
    expect(get(undefined, ['x', 'y', 'z'], 'default')).toBe('default')
  })

  test('should handle empty paths', () => {
    expect(get(object, '')).toBe(undefined)
    expect(get(object, [], 'default')).toBe('default')
  })

  test('should handle arrays in path', () => {
    const arr = [1, { 'a': 2 }, [{ 'b': 3 }]]
    expect(get(arr, '1.a')).toBe(2)
    expect(get(arr, '[2][0].b')).toBe(3)
  })
})