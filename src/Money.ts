import { Expression } from './Expression'
import { Sum } from './Sum'
import { Bank } from './Bank'

export class Money implements Expression {
    readonly amount: number
    readonly currency: string

    constructor(amount: number, currency: string) {
        this.amount = amount
        this.currency = currency
    }

    times(multiplier: number) {
        return new Money(this.amount * multiplier, this.currency)
    }

    plus(addend: Money) {
        return new Sum(this, addend)
    }

    reduce(bank: Bank, to: string) {
        const rate = bank.rate(this.currency, to)
        return new Money(this.amount / rate, to)
    }

    equals(money: Money) {
        return this.amount === money.amount
            && this.currency === money.currency
    }

    toString() {
        return `${this.amount} ${this.currency}`
    }

    static dollar(amount: number) {
        return new Money(amount, 'USD')
    }

    static franc(amount: number) {
        return new Money(amount, 'CHF')
    }

}
