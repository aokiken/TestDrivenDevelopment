import { Expression } from './Expression'

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
        return new Money(this.amount + addend.amount, this.currency)
    }

    equals(money: Money) {
        return this.amount === money.amount
            && this.currency === money.currency
    }

    toString() {
        return `${this.amount} ${this.currency}`
    }

    static dollar(amount: number) {
        return new Dollar(amount, 'USD')
    }

    static franc(amount: number) {
        return new Franc(amount, 'CHF')
    }

}

export class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency)
    }
}

export class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency)
    }
}
