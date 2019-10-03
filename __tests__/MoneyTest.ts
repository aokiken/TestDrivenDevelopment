import { Dollar } from '../src/Dollar'
import { Franc } from '../src/Franc'

test('Multiplication', () => {
    const five = new Dollar(5)
    expect(new Dollar(10)).toEqual(five.times(2))
    expect(new Dollar(15)).toEqual(five.times(3))
})

test('Equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
    expect(new Franc(5).equals(new Franc(5))).toBe(true)
    expect(new Franc(5).equals(new Franc(6))).toBe(false)
    expect(new Franc(5).equals(new Dollar(5))).toBe(false)
})

test('FrancMultiplication', () => {
    const five = new Franc(5)
    expect(new Franc(10)).toEqual(five.times(2))
    expect(new Franc(15)).toEqual(five.times(3))
})

