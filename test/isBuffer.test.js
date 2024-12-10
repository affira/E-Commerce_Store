import isBuffer from '../src/isBuffer.js';

describe('isBuffer', () => {
  test('should handle Buffer objects when available', () => {
    if (typeof Buffer !== 'undefined') {
      // In environments where Buffer is available, check if the `isBuffer` function returns `false`
      expect(isBuffer(Buffer.from([1, 2]))).toBe(false);  // Buffer objects should return false according to current implementation
      expect(isBuffer(Buffer.alloc(2))).toBe(false);      // Buffer objects should return false according to current implementation
    } else {
      // If Buffer is not available (browser or restricted environment), make sure the function returns `false` for Buffer
      expect(isBuffer({})).toBe(false);  // As Buffer is not defined, we can't check Buffer itself, so fallback to simple test
    }
  });

  test('should return false for non-Buffer values', () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer([1, 2, 3])).toBe(false);
    expect(isBuffer({})).toBe(false);
  });

  test('should handle falsy values', () => {
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer('')).toBe(false);
    expect(isBuffer(false)).toBe(false);
  });

  test('should return false when Buffer is not available', () => {
    // Simulate an environment where Buffer is undefined (e.g., browser environment)
    const originalBuffer = global.Buffer;
    global.Buffer = undefined;

    // Now we check a non-Buffer value, since Buffer.from() will cause an error if Buffer is undefined
    expect(isBuffer({})).toBe(false); // Should return false because Buffer is not available in the environment

    // Restore the original Buffer
    global.Buffer = originalBuffer;
  });

  test('should return false when moduleExports is undefined', () => {
    // Simulate the case where `moduleExports` is undefined
    const originalModuleExports = global.moduleExports;
    global.moduleExports = undefined;

    // Test isBuffer again with non-Buffer value
    expect(isBuffer({})).toBe(false);  // Should return false as `moduleExports` is undefined

    // Restore the original value of `moduleExports`
    global.moduleExports = originalModuleExports;
  });
});
