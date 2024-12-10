# Software Testing Assignment

This repository contains the implementation and tests for various utility functions, including checking whether a value is a typed array. It demonstrates the usage of JavaScript's type checking, unit testing with Jest, and understanding edge cases with custom `toStringTag` values and more.

[![Coverage Status](https://coveralls.io/repos/github/affira/E-Commerce_Store/badge.svg?branch=main)](https://coveralls.io/github/affira/E-Commerce_Store?branch=main)


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Testing](#testing)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

To get started, clone this repository and install the required dependencies using npm.

```bash
git clone https://github.com/affira/E-Commerce_Store.git
cd software-testing-assignment
npm install
```

## Usage

This project provides utility functions to check different types of objects in JavaScript. One of the core functions is `isTypedArray`, which checks whether a given value is a typed array.

Here is an example usage:

```javascript
import isTypedArray from './src/isTypedArray';

console.log(isTypedArray(new Int8Array(10))); // true
console.log(isTypedArray([]));               // false
```

## Testing

This project uses **Jest** for unit testing. To run the tests, use the following command:

```bash
npm test
```

If you want to run a specific test file, you can pass the path to the test file:

```bash
npm test -- test/isTypedArray.test.js
```

This will execute the tests for the `isTypedArray` function.

### Tests

The tests are located in the `test` folder and cover a variety of edge cases:

- **Basic type checking** for `typed arrays` and other types.
- **Custom `toStringTag` testing**, checking how the `isTypedArray` function interacts with objects having a custom `Symbol.toStringTag`.
- **Array-like object testing**, ensuring that array-like objects are properly recognized.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


