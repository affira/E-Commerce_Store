import isDate from '../src/isDate.js';

describe('isDate', () => {
  test('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
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
    expect(isDate([])).toBe(false);  // Adding an array test case
    expect(isDate(new Error())).toBe(false);  // Adding an error object test case
  });

  test('should handle invalid dates', () => {
    expect(isDate(new Date('invalid'))).toBe(true); // Still a Date object, even if invalid
  });

  test('should return false for objects that look like Date but are not', () => {
    const fakeDate = { toString: () => 'Mon April 23 2012' }; // Simulating a fake Date object
    expect(isDate(fakeDate)).toBe(false);
  });

  test('should return true for subclasses of Date', () => {
    class CustomDate extends Date {}
    const customDateInstance = new CustomDate();
    expect(isDate(customDateInstance)).toBe(true);  // Subclass of Date should still return true
  });
});
