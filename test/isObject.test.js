import isObject from '../src/isObject.js';

describe('isObject', () => {
    test('should return true for objects', () => {
      expect(isObject({})).toBe(true);
      expect(isObject([1, 2, 3])).toBe(true);
      expect(isObject(new Date())).toBe(true);
      expect(isObject(new RegExp(''))).toBe(true);
    });
  
    test('should return true for functions', () => {
      expect(isObject(Function)).toBe(true);
      expect(isObject(() => {})).toBe(true);
      expect(isObject(class {})).toBe(true);
    });
  
    test('should return false for primitives', () => {
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(123)).toBe(false);
      expect(isObject('string')).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject(Symbol())).toBe(false);
    });
  
    test('should return true for wrapped primitives', () => {
      expect(isObject(Object(123))).toBe(true);
      expect(isObject(Object('string'))).toBe(true);
      expect(isObject(Object(true))).toBe(true);
    });
  });