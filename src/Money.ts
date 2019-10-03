export class Money {
    protected amount: number

    equals(money: Money) {
        return this.amount === money.amount
            && this.constructor.name === money.constructor.name
    }
}
