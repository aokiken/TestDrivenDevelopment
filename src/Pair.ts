export class Pair {
    readonly from: string
    readonly to: string

    constructor(from: string, to: string) {
        this.from = from
        this.to = to
    }

    toString() {
        return `${this.from}-${this.to}`
    }

    equals(pair: Pair) {
        return this.from === pair.from && this.to === pair.to
    }

    hashCode() {
        return 0
    }
}
