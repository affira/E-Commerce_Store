/**
 * Gets the value at path of object
 *
 * @param {Object} object The object to query
 * @param {Array|string} path The path of the property to get
 * @param {*} [defaultValue] The value returned for undefined resolved values
 * @returns {*} Returns the resolved value
 */
function get(object, path, defaultValue) {
    const paths = Array.isArray(path) ? path : path.split('.')
    
    let result = object
    
    for (const segment of paths) {
      if (result == null) {
        return defaultValue
      }
      
      // Handle array indexing
      const match = segment.match(/(\w+)\[(\d+)\]/)
      if (match) {
        result = result[match[1]][match[2]]
      } else {
        result = result[segment]
      }
    }
    
    return result === undefined ? defaultValue : result
  }
  
  export default get