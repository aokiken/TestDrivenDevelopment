import { Expression } from './Expression'
import { Pair } from './Pair'

export class Bank {
    private rates: Map<string, number>

    constructor() {
        this.rates = new Map()
    }

    reduce(source: Expression, to: string) {
        return source.reduce(this, to)
    }

    addRate(from: string, to: string, rate: number) {
        this.rates.set(new Pair(from, to).toString(), rate)
    }

    rate(from: string, to: string) {
        if (from === to) return 1
        return this.rates.get(new Pair(from, to).toString())
    }
}
