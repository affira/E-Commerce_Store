import at from '../src/at.js';

describe('at', () => {
  it('should return the values corresponding to the given paths', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.c', 'a[1]']);
    expect(result).toEqual([3, 4]);
  });

  it('should return undefined for a non-existing path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.d']);
    expect(result).toEqual([undefined]);
  });

  it('should return an empty array if no paths are provided', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object);
    expect(result).toEqual([]);
  });

  it('should handle nested objects correctly', () => {
    const object = { 'a': { 'b': { 'c': { 'd': 5 } } } };
    const result = at(object, ['a.b.c.d']);
    expect(result).toEqual([5]);
  });

  it('should return undefined if the object is null or undefined', () => {
    const result = at(null, ['a[0].b']);
    expect(result).toEqual([undefined]);
  });
});
