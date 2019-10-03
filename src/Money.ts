export class Money {
    readonly amount: number
    readonly currency: string

    constructor(amount: number, currency: string) {
        this.amount = amount
        this.currency = currency
    }

    equals(money: Money) {
        return this.amount === money.amount
            && this.constructor.name === money.constructor.name
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

    times(multiplier: number) {
        return new Franc(this.amount * multiplier)
    }

}

export class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency)
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier)
    }

}
