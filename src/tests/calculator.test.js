import { calculator as cal } from '../calculator'

test('Add', () => expect(cal.add(1, 2)).toBe(3))
test('Subtract', () => expect(cal.subtract(1, 2)).toBe(-1))
test('Multiply', () => expect(cal.multiply(2, 4)).toBe(8))
test('divide', () => expect(cal.divide(1, 2)).toBeCloseTo(0.5))
