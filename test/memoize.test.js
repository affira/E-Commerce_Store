describe('memoize', () => {
    test('should memoize results based on first argument', () => {
      let callCount = 0;
      const fibonacci = memoize(n => {
        callCount++;
        return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
      });
  
      expect(fibonacci(5)).toBe(5);
      const expectedCallCount = callCount;
      expect(fibonacci(5)).toBe(5);
      expect(callCount).toBe(expectedCallCount);
    });
  
    test('should support resolver functions', () => {
      const object = { 'a': 1, 'b': 2 };
      let callCount = 0;
  
      const memoized = memoize(
        (...args) => {
          callCount++;
          return args[args.length - 1];
        },
        (...args) => JSON.stringify(args)
      );
  
      expect(memoized('a', object)).toBe(object);
      expect(memoized('b', object)).toBe(object);
      expect(callCount).toBe(2);
  
      memoized('a', object);
      expect(callCount).toBe(2);
    });
  
    test('should throw error for invalid arguments', () => {
      expect(() => memoize('not a function')).toThrow(TypeError);
      expect(() => memoize(() => {}, 'not a function')).toThrow(TypeError);
    });
  
    test('should work with custom Cache constructors', () => {
      const prevCache = memoize.Cache;
      memoize.Cache = WeakMap;
  
      const memoized = memoize(obj => obj.value);
      const object = { value: 42 };
  
      expect(memoized(object)).toBe(42);
      object.value = 84;
      expect(memoized(object)).toBe(42);
  
      memoize.Cache = prevCache;
    });
  });
  