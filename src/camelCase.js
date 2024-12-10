import upperFirst from './upperFirst.js'
import words from './words.js'
import toString from './toString.js'

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = (str) => {
  if (str === '') return '';

  // Replace any non-alphanumeric characters with spaces
  str = str.replace(/[^a-zA-Z0-9]+/g, ' ');

  // Split the string into words and capitalize appropriately
  const words = str.split(' ');

  // The first word should be all lowercase, others should start with uppercase
  return words
    .map((word, index) => {
      // Remove unwanted characters and make sure only the first letter is capitalized (except the first word)
      word = word.replace(/[^a-zA-Z0-9]/g, '');
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};

export default camelCase;

