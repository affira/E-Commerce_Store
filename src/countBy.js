/**
 * Creates an object composed of keys generated from the results of running
 * each element through iteratee
 */
import reduce from './reduce.js'

function countBy(collection, iteratee) {
    return reduce(collection, (result, value) => {
      const key = iteratee(value)
      if (hasOwnProperty.call(result, key)) {
        ++result[key]
      } else {
        result[key] = 1
      }
      return result
    }, {})
  }
  
  export default countBy