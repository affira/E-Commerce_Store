import reduce from '../src/reduce.js'

describe('reduce', () => {
 test('should reduce array with initial value', () => {
   const array = [1, 2, 3]
   const result = reduce(array, (sum, n) => sum + n, 0)
   expect(result).toBe(6)
 })

 test('should reduce array without initial value', () => {
   const array = [1, 2, 3]
   const result = reduce(array, (sum, n) => sum + n)
   expect(result).toBe(6)
 })

 test('should handle null/undefined values', () => {
   expect(reduce(null, (sum, n) => sum + n, 0)).toBe(0)
   expect(reduce(undefined, (sum, n) => sum + n, 0)).toBe(0)
   expect(reduce(null, (sum, n) => sum + n, 10)).toBe(10)
 })

 test('should reduce objects', () => {
   const object = { 'a': 1, 'b': 2, 'c': 3 }
   const result = reduce(object, (result, value, key) => {
     result[key] = value * 2
     return result
   }, {})
   expect(result).toEqual({ 'a': 2, 'b': 4, 'c': 6 })
 })

 test('should handle empty arrays/objects', () => {
   expect(reduce([], (sum, n) => sum + n, 0)).toBe(0)
   expect(reduce({}, (result, value) => value, 0)).toBe(0)
 })

 test('should handle object reduction with initial value', () => {
   const object = { 'a': 1, 'b': 2 }
   const result = reduce(object, (sum, n) => sum + n, 0)
   expect(result).toBe(3)
 })

 test('should handle object reduction without initial value', () => {
   const object = { 'a': 1, 'b': 2, 'c': 3 }
   const result = reduce(object, (sum, n) => sum + n)
   expect(result).toBe(6)
 })

 test('should pass correct arguments to iteratee for objects', () => {
   const object = { 'a': 1, 'b': 2 }
   const spy = jest.fn((acc) => acc)
   reduce(object, spy, 0)
   expect(spy).toHaveBeenNthCalledWith(1, 0, 1, 'a', object)
   expect(spy).toHaveBeenNthCalledWith(2, 0, 2, 'b', object)
 })

 test('should pass correct arguments to iteratee for arrays', () => {
   const array = [1, 2]
   const spy = jest.fn((acc) => acc)
   reduce(array, spy, 0)
   expect(spy).toHaveBeenNthCalledWith(1, 0, 1, 0, array)
   expect(spy).toHaveBeenNthCalledWith(2, 0, 2, 1, array)
 })

 test('should handle array edge cases', () => {
   expect(reduce([1], (sum, n) => sum + n)).toBe(1)
   expect(reduce([1], (sum, n) => sum + n, 2)).toBe(3)
   expect(reduce([], (sum, n) => sum + n)).toBeUndefined()
 })

 test('should handle object edge cases', () => {
   expect(reduce({a: 1}, (sum, n) => sum + n)).toBe(1)
   expect(reduce({a: 1}, (sum, n) => sum + n, 2)).toBe(3)
   expect(reduce({}, (sum, n) => sum + n)).toBeUndefined()
 })
})