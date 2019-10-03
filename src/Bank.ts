import { Expression } from './Expression'

export class Bank {
    reduce(source: Expression, to: string) {
        return source.reduce(to)
    }
}
