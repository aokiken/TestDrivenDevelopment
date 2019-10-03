export class Money {
    protected amount: number

    equals(money: Money) {
        return this.amount === money.amount
            && this.constructor.name === money.constructor.name
    }

    static dollar(amount: number) {
        return new Dollar(amount)
    }

    static franc(amount: number) {
        return new Franc(amount)
    }

}

export class Franc extends Money {
    constructor(amount: number) {
        super()
        this.amount = amount
    }

    times(multiplier: number) {
        return new Franc(this.amount * multiplier)
    }

}

export class Dollar extends Money {
    constructor(amount: number) {
        super()
        this.amount = amount
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier)
    }

}
