import { Money, Franc } from '../src/Money'

test('Multiplication', () => {
    const five = Money.dollar(5)
    expect(Money.dollar(10)).toEqual(five.times(2))
    expect(Money.dollar(15)).toEqual(five.times(3))
})

test('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
})

test('Currency', () => {
    expect('USD').toEqual(Money.dollar(1).currency)
    expect('CHF').toEqual(Money.franc(1).currency)
})

