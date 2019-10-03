import { Money } from './Money'
import { Bank } from './Bank'

export interface Expression {
    times(multiplier: number): Expression

    plus(addend: Expression): Expression

    reduce(bank: Bank, to: string): Money
}
