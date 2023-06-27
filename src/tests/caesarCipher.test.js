import caesarCipher from '../caesarCipher'

test('Simple string', () =>
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  ))

test('Negative shift', () =>
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -1)).toBe(
    'zabcdefghijklmnopqrstuvwxy'
  ))

test('Spacing and special characters', () =>
  expect(caesarCipher('Make it work, make it right, make it fast.', 7)).toBe(
    'thrl pa dvyr, thrl pa ypnoa, thrl pa mhza.'
  ))

test('Empty string', () => expect(caesarCipher('', 7)).toBe(''))
