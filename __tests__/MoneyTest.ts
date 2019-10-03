import { Money, Franc } from '../src/Money'

test('Multiplication', () => {
    const five = Money.dollar(5)
    expect(Money.dollar(10)).toEqual(five.times(2))
    expect(Money.dollar(15)).toEqual(five.times(3))
})

test('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true)
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false)
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
})

test('FrancMultiplication', () => {
    const five = Money.franc(5)
    expect(Money.franc(10)).toEqual(five.times(2))
    expect(Money.franc(15)).toEqual(five.times(3))
})

test('Currency', () => {
    expect('USD').toEqual(Money.dollar(1).currency)
    expect('CHF').toEqual(Money.franc(1).currency)
})

test('DifferentClassEquality', () => {
    expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF'))).toBe(true)
})
