export default {
    transform: {
        '^.+\\.js$': ['babel-jest', { configFile: './babel.config.js' }],
      },
    testEnvironment: 'node',
    moduleFileExtensions: ['js'],
    collectCoverageFrom: [
      'src/**/*.js',
      '!src/.internal/**'
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    },
    testMatch: [
      '<rootDir>/test/**/*.test.js'
    ],
    verbose: true,
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    cacheDirectory: '<rootDir>/.jest-cache'
  };