import { Money } from './Money'

export class Dollar extends Money {
    readonly amount: number

    constructor(amount: number) {
        super()
        this.amount = amount
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier)
    }

}
