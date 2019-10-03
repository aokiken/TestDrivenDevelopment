import { Money } from './Money'
import { Bank } from './Bank'

export interface Expression {
    plus(addend: Expression): Expression

    reduce(bank: Bank, to: string): Money
}
