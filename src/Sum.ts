import { Expression } from './Expression'
import { Money } from './Money'
import { Bank } from './Bank'

export class Sum implements Expression {
    augend: Money
    addend: Money

    constructor(augend: Money, addend: Money) {
        this.augend = augend
        this.addend = addend
    }

    reduce(bank: Bank, to: string) {
        const amount = this.augend.amount + this.addend.amount
        return new Money(amount, to)
    }
}
