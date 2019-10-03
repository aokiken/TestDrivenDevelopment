import { Expression } from './Expression'
import { Money } from './Money'
import { Bank } from './Bank'

export class Sum implements Expression {
    augend: Expression
    addend: Expression

    constructor(augend: Expression, addend: Expression) {
        this.augend = augend
        this.addend = addend
    }

    times(multiplier: number) {
        return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
    }

    plus(addend: Expression) {
        return new Sum(this, addend)
    }

    reduce(bank: Bank, to: string) {
        const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount
        return new Money(amount, to)
    }
}
