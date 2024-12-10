describe('isDate', () => {
    test('should return true for Date objects', () => {
      expect(isDate(new Date)).toBe(true);
    });
  
    test('should return false for date strings', () => {
      expect(isDate('Mon April 23 2012')).toBe(false);
      expect(isDate('2012-04-23')).toBe(false);
    });
  
    test('should return false for non-date values', () => {
      expect(isDate(null)).toBe(false);
      expect(isDate(undefined)).toBe(false);
      expect(isDate(123)).toBe(false);
      expect(isDate({})).toBe(false);
      expect(isDate(() => {})).toBe(false);
    });
  
    test('should handle invalid dates', () => {
      expect(isDate(new Date('invalid'))).toBe(true); // Still a Date object, even if invalid
    });
  });