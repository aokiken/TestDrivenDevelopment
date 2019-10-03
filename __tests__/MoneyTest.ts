import { Money } from '../src/Money'
import { Bank } from '../src/Bank'
import { Sum } from "../src/Sum";

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

test('SimpleAddition', () => {
    const five = Money.dollar(5)
    const sum = five.plus(five)
    const bank = new Bank()
    const reduced = bank.reduce(sum, 'USD')
    expect(Money.dollar(10)).toEqual(reduced)
})

test('PlusReturnsSum', () => {
    const five = Money.dollar(5)
    const sum = five.plus(five)
    expect(five).toEqual(sum.augend)
    expect(five).toEqual(sum.addend)
})

test('ReduceSum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduce(sum, 'USD')
    expect(Money.dollar(7)).toEqual(result)
})
