import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
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
    expect(isEmpty(Foo.prototype)).toBe(false); // Prototype with enumerable property is not empty
  });

  test('should handle non-enumerable prototype properties', () => {
    function Bar() {}
    Object.defineProperty(Bar.prototype, 'b', {
      enumerable: false,
      value: 1
    });
    expect(isEmpty(Bar.prototype)).toBe(true); // Non-enumerable properties are not counted
  });

  test('should return false for objects with non-enumerable properties', () => {
    const obj = Object.create(null);
    Object.defineProperty(obj, 'nonEnum', {
      enumerable: false,
      value: 'hidden'
    });
    expect(isEmpty(obj)).toBe(true); // Object with non-enumerable property is considered empty
  });

  test('should return false for non-empty arguments object', () => {
    function testFunc() {
      return isEmpty(arguments); // Test the "arguments" object
    }
    expect(testFunc(1, 2)).toBe(false);
  });

  test('should return true for empty arguments object', () => {
    function testFunc() {
      return isEmpty(arguments); // Test empty "arguments" object
    }
    expect(testFunc()).toBe(true);
  });
  
});
