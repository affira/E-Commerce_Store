/**
 * Reverses array
 */
function reverse(array) {
    if (array == null) {
      return []
    }
  
    let index = -1
    const length = array.length
    const result = new Array(length)
  
    while (++index < length) {
      result[index] = array[length - index - 1]
    }
    return result
  }
  
  export default reverse