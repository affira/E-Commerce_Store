/**
 * Checks if value is empty
 */
function isEmpty(value) {
    if (value == null) {
      return true
    }
    
    if (Array.isArray(value) || typeof value === 'string') {
      return !value.length
    }
    
    if (value instanceof Map || value instanceof Set) {
      return !value.size
    }
    
    if (typeof value === 'object') {
      return !Object.keys(value).length
    }
    
    return true
  }
  
  export default isEmpty