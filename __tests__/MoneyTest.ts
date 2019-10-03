import { Dollar } from "../src/Dollar"

test('Multiplication', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(10).toEqual(five.amount)
})
