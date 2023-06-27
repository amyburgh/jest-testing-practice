import capitalize from '../capitalize'

test('Capitalize string', () => expect(capitalize('hello')).toBe('Hello'))
test('Capitalize letter', () => expect(capitalize('a')).toBe('A'))
test('Symbol', () => expect(capitalize('!hello')).toBe('!hello'))
test('Empty string', () => expect(capitalize('')).toBe(''))
