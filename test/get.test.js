describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('should get value using string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, 'a.0.b.c')).toBe(3);
  });

  test('should get value using array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    expect(get(object, ['a', 0, 'b', 'c'])).toBe(3);
  });

  test('should return defaultValue for undefined resolved values', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
    expect(get(object, ['a', 'b', 'c'], 'default')).toBe('default');
  });

  test('should handle null/undefined objects', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });

  test('should handle complex objects and arrays', () => {
    const complexObj = {
      'a': {
        'b': [1, 2, { 'c': { 'd': [4, 5, 6] } }]
      }
    };
    expect(get(complexObj, 'a.b[2].c.d[1]')).toBe(5);
    expect(get(complexObj, ['a', 'b', 2, 'c', 'd', 1])).toBe(5);
  });
});