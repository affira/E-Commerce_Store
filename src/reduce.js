/**
 * Reduces collection to a value which is the accumulated result
 */
function reduce(collection, iteratee, accumulator) {
    const func = Array.isArray(collection) ? arrayReduce : baseReduce
    const initAccum = arguments.length < 3
    return func(collection, iteratee, accumulator, initAccum)
  }
  
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    let index = -1
    const length = array == null ? 0 : array.length
  
    if (initAccum && length) {
      accumulator = array[++index]
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array)
    }
    return accumulator
  }
  
  function baseReduce(object, iteratee, accumulator, initAccum) {
    const keys = Object.keys(object)
    let index = -1
    const length = keys.length
  
    if (initAccum && length) {
      accumulator = object[keys[++index]]
    }
    while (++index < length) {
      const key = keys[index]
      accumulator = iteratee(accumulator, object[key], key, object)
    }
    return accumulator
  }
  
  export default reduce