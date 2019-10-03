import { Money } from './Money'

export class Franc extends Money {
    readonly amount: number

    constructor(amount: number) {
        super()
        this.amount = amount
    }

    times(multiplier: number) {
        return new Franc(this.amount * multiplier)
    }

}
