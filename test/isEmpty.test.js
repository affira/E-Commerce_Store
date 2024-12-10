describe('isEmpty', () => {
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for empty arrays and array-like objects', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(new Array())).toBe(true);
  });

  test('should return false for non-empty arrays and strings', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(Object.create(null))).toBe(true);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should handle Map and Set objects', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    
    const map = new Map([['key', 'value']]);
    const set = new Set([1]);
    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(set)).toBe(false);
  });

  test('should handle prototype objects', () => {
    function Foo() {}
    Foo.prototype.a = 1;
    expect(isEmpty(Foo.prototype)).toBe(true); // Prototype properties are not counted
  });
});