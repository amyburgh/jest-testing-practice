import reverseString from '../reverseString'

test('Reverse a string', () =>
  expect(reverseString('Hello world!')).toBe('!dlrow olleH'))

test('Empty string', () => expect(reverseString('')).toBe(''))

test('Single character', () => expect(reverseString('a')).toBe('a'))
