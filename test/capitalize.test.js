import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    const result = capitalize('fred');
    expect(result).toEqual('Fred');
  });

  it('should handle a string already in uppercase', () => {
    const result = capitalize('FRED');
    expect(result).toEqual('Fred');
  });

  it('should handle mixed case input', () => {
    const result = capitalize('fReD');
    expect(result).toEqual('Fred');
  });

  it('should return an empty string if the input is empty', () => {
    const result = capitalize('');
    expect(result).toEqual('');
  });

  it('should not affect a string that is already properly capitalized', () => {
    const result = capitalize('Fred');
    expect(result).toEqual('Fred');
  });
});
