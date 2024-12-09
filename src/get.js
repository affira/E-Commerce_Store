/**
 * Gets the value at path of object
 *
 * @param {Object} object The object to query
 * @param {Array|string} path The path of the property to get
 * @param {*} [defaultValue] The value returned for undefined resolved values
 * @returns {*} Returns the resolved value
 */
function get(object, path, defaultValue) {
  if (object == null || path === undefined) {
    return defaultValue;
  }

  if (path === '' || (Array.isArray(path) && path.length === 0)) {
    return defaultValue;
  }

  const paths = Array.isArray(path) ? path : path.split(/[.\[\]]+/).filter(Boolean);
  let result = object;

  for (const p of paths) {
    result = result?.[p];
    if (result === undefined) {
      return defaultValue;
    }
  }

  return result;
}

export default get;