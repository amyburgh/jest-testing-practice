import analyzeArray from '../analyzeArray'

test('Base case', () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }))

test('Zero', () =>
  expect(analyzeArray([0])).toMatchObject({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  }))

test('Empty array', () =>
  expect(analyzeArray([])).toMatchObject({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0,
  }))
