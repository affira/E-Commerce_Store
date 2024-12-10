describe('isTypedArray', () => {
    test('should identify typed arrays', () => {
      expect(isTypedArray(new Int8Array(2))).toBe(true);
      expect(isTypedArray(new Uint8Array(2))).toBe(true);
      expect(isTypedArray(new Uint8ClampedArray(2))).toBe(true);
      expect(isTypedArray(new Int16Array(2))).toBe(true);
      expect(isTypedArray(new Uint16Array(2))).toBe(true);
      expect(isTypedArray(new Int32Array(2))).toBe(true);
      expect(isTypedArray(new Uint32Array(2))).toBe(true);
      expect(isTypedArray(new Float32Array(2))).toBe(true);
      expect(isTypedArray(new Float64Array(2))).toBe(true);
    });
  
    test('should return false for non-typed arrays', () => {
      expect(isTypedArray([])).toBe(false);
      expect(isTypedArray({})).toBe(false);
      expect(isTypedArray(null)).toBe(false);
      expect(isTypedArray(undefined)).toBe(false);
      expect(isTypedArray(new Date())).toBe(false);
      expect(isTypedArray(new RegExp(''))).toBe(false);
    });
  });